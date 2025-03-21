"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { PropsWithChildren, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border border-slate-200 p-2 backdrop-blur-md dark:border-slate-800"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);
    const mousey = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement<DockIconProps>(child)) {
          return React.cloneElement(child, {
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
            mousex,
            mousey,
          });
        }
        return child;
      });
    };


    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          mousex.set(e.pageX);
          mousey.set(e.pageY);
        }}
        onMouseLeave={() => {
          mousex.set(Infinity);
          mousey.set(Infinity);
        }}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: MotionValue<number>;
  mousey?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  mousey,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultmousex = useMotionValue(Infinity);
  const defaultmousey = useMotionValue(Infinity);

  // Calculate horizontal distance for scaling
  const distanceCalc = useTransform(mousex ?? defaultmousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Fix: Constrain vertical tilt or disable when used in footer
  const verticalTilt = useTransform(mousey ?? defaultmousey, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    // Avoid flipping in the footer by limiting rotation
    const tilt = (val - bounds.y - bounds.height / 2) / 20;
    return Math.min(Math.max(tilt, -5), 5); // Limit rotation between -5deg to 5deg
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const elevation = useTransform(distanceCalc, [-distance, 0, distance], [0, -10, 0]);

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: scaleSize,
        height: scaleSize,
        padding,
        y: elevation,
        rotateX: verticalTilt, // If needed, replace with `rotateX: 0` when used in the footer.
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-all",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};


DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
