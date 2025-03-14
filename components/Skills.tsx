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
                "relative h-full w-48 md:w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt={name} src={img} />
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
        <div className="w-full max-w-full px-4 md:px-8 lg:px-12">
            <h1 className="text-lg text-black dark:text-white font-bold mb-6">Technical Skills</h1>

            {/* Programming Languages - Left to Right */}
            <div className="flex flex-col z-50 mb-8">
                <h2 className="text-base font-semibold mb-4">Programming Languages</h2>
                <div className="relative w-full overflow-hidden">
                    <Marquee direction="right" pauseOnHover className="[--duration:20s]">
                        {languages.map((skill) => (
                            <ReviewCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Frameworks & Libraries - Right to Left */}
            <div className="flex flex-col z-50 mb-8">
                <h2 className="text-base font-semibold mb-4">Frameworks & Libraries</h2>
                <div className="relative w-full overflow-hidden">
                    <Marquee direction="left" pauseOnHover className="[--duration:20s]">
                        {frameworks.map((skill) => (
                            <ReviewCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Tools & Databases - Left to Right */}
            <div className="flex flex-col z-50 mb-8">
                <h2 className="text-base font-semibold mb-4">Tools & Databases</h2>
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