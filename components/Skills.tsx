import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";


const reviews = [
    {
        name: "HTML",

        img: "/images/html.jpg",
    },
    {
        name: "CSS",

        img: "/images/css.jpg",
    },
    {
        name: "JAVSCRIPT",

        img: "/images/js.jpg",
    },
    {
        name: "GITHUB",

        img: "/images/git.jpg",
    },
    {
        name: "REACT",

        img: "/images/react.jpg",
    },
    {
        name: "EXPRESS",

        img: "/images/th (9).jpg",
    },
    {
        name: "MONGO DB",

        img: "/images/m.jpg",
    },
    {
        name: "NODE",

        img: "/images/node.jpg",
    },
    {
        name: "NEXT JS",

        img: "/images/next.jpg",
    },
    {
        name: "C++ and DSA",

        img: "/images/c.jpg",
    },

];

const firstRow = reviews.slice(0, reviews.length / 1);


const ReviewCard = ({
    img,
    name,

}: {
    img: string;
    name: string;

}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
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
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold'> Technical Skills</h1>



            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">


                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </div>
    );
}

