import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const languages = [
  { name: "HTML", img: "/images/html.jpg" },
  { name: "CSS", img: "/images/css.jpg" },
  { name: "JAVASCRIPT", img: "/images/js.jpg" },
  { name: "TYPESCRIPT", img: "/images/ts.png" },
  { name: "C++", img: "/images/c.jpg" },
  { name: "C", img: "/images/cl.png" },
  { name: "PYTHON", img: "/images/py.jpg" },
];

const frameworks = [
  { name: "REACT", img: "/images/react.jpg" },
  { name: "NEXT JS", img: "/images/next.jpg" },
  { name: "EXPRESS", img: "/images/th (9).jpg" },
  { name: "NODE", img: "/images/node.jpg" },
];

const tools = [
  { name: "GITHUB", img: "/images/git.jpg" },
  { name: "MONGO DB", img: "/images/m.jpg" },
  { name: "MySQL", img: "/images/OIP.jpg" },
];

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 md:w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 transition-transform hover:scale-[1.03]",
        "border-emerald-500 bg-gradient-to-tr from-white/20 to-emerald-100/10 dark:from-white/10 dark:to-emerald-900/5 backdrop-blur",
        "shadow-md hover:shadow-xl"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full object-cover border border-emerald-500"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <figcaption className="text-base font-semibold tracking-tight text-black dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-full max-w-full px-4 md:px-8 lg:px-12 mt-12">
     <h2 className="text-3xl font-bold mb-8 text-emerald-500 dark:text-cyan-400 tracking-tight">
        Technical Skills
      </h2>

      {/* Programming Languages */}
      <section className="mb-10 mt-4 max-w-7xl">
        <h2 className="text-xl font-semibold mb-3  bg-clip-text">
          Programming Languages
        </h2>
        <div className="relative w-full overflow-hidden">
          <Marquee direction="right" pauseOnHover className="[--duration:25s]">
            {languages.map((skill) => (
              <ReviewCard key={skill.name} {...skill} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Frameworks */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3  bg-clip-text">
          Frameworks & Libraries
        </h2>
        <div className="relative w-full overflow-hidden">
          <Marquee direction="left" pauseOnHover className="[--duration:25s]">
            {frameworks.map((skill) => (
              <ReviewCard key={skill.name} {...skill} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 bg-clip-text">
          Tools & Databases
        </h2>
        <div className="relative w-full overflow-hidden">
          <Marquee direction="right" pauseOnHover className="[--duration:25s]">
            {tools.map((skill) => (
              <ReviewCard key={skill.name} {...skill} />
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
