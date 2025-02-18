import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const languages = [
    { name: "HTML", img: "/images/html.jpg" },
    { name: "CSS", img: "/images/css.jpg" },
    { name: "JAVASCRIPT", img: "/images/js.jpg" },
    { name: "TYPESCRIPT", img: "/images/ts.png" },
    { name: "C++ and DSA", img: "/images/c.jpg" },
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
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Technical Skills</h1>

            {/* Programming Languages - Left to Right */}
            <div className="flex flex-col z-50">
                <h2 className="text-base font-semibold">Programming Languages</h2>
                <div className="relative w-full overflow-hidden">
                    <Marquee direction="right" pauseOnHover className="[--duration:20s]">
                        {languages.map((skill) => (
                            <ReviewCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Frameworks & Libraries - Right to Left */}
            <div className="flex flex-col  z-50">
                <h2 className="text-base font-semibold">Frameworks & Libraries</h2>
                <div className="relative w-full overflow-hidden">
                    <Marquee direction="left" pauseOnHover className="[--duration:20s]">
                        {frameworks.map((skill) => (
                            <ReviewCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Tools & Databases - Left to Right */}
            <div className="flex flex-col z-50">
                <h2 className="text-base font-semibold">Tools & Databases</h2>
                <div className="relative w-full overflow-hidden">
                    <Marquee direction="right" pauseOnHover className="[--duration:20s]">
                        {tools.map((skill) => (
                            <ReviewCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
