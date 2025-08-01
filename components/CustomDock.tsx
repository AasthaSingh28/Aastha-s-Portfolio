"use client";

import {
 
  HomeIcon,
  MailIcon,
  Moon,
 
  Sun,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./magicui/dock";



export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>LinkedIn</title>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v12h-4v-12zm7 0h3.6v1.68h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.76v6.51h-4v-5.78c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.05v5.89h-4v-12z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>GitHub</title>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
};

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AasthaSingh28",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aastha-singh-0167b3257/",
        icon: Icons.linkedin,
      },
      Email: {
        name: "Send Email",
        url: "mailto:aasthasinghddun@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export function DockDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      {/* Bottom Dock - Mobile Only */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Dock direction="bottom" className="bg-background px-2 py-1 rounded-xl shadow-md">
          {renderDockContent(theme, setTheme)}
        </Dock>
      </div>

      {/* Left Dock - Desktop Only */}
      <div className="hidden md:flex fixed top-1/2 left-4 -translate-y-1/2 z-50">
        <Dock direction="middle" className="flex-col bg-background px-2 py-2 rounded-xl shadow-lg h-fit">
          {renderDockContent(theme, setTheme)}
        </Dock>
      </div>
    </TooltipProvider>
  );
}

function renderDockContent(theme: string | undefined, setTheme: (theme: string) => void) {
  return (
    <>
      {DATA.navbar.map((item) => (
        <DockIcon key={item.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                aria-label={item.label}
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}
              >
                <item.icon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" className="h-full my-2" />
      {Object.entries(DATA.contact.social).map(([name, social]) => (
        <DockIcon key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={social.url}
                aria-label={social.name}
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}
              >
                <social.icon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" className="h-full my-2" />
      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="size-12 rounded-full flex justify-center items-center cursor-pointer">
              {theme === "light" ? (
                <Sun className="size-4 w-5 h-5" onClick={() => setTheme("dark")} />
              ) : (
                <Moon className="size-4 w-5 h-5" onClick={() => setTheme("light")} />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </>
  );
}
