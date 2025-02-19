import { NumberTicker } from "@/components/magicui/number-ticker";
import { Ripple } from "./magicui/ripple";


export function NumberTickerDemo() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Ripple />
            <div className=" text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Loading Page....

                </h1>

                <NumberTicker
                    value={101}
                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
                />

            </div>
        </div>
    );
}