"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { Ripple } from "./magicui/ripple";
import { TypingAnimation } from "./magicui/typing-animation";
import Link from "next/link";

export function NumberTickerDemo() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            <Ripple />


            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#1e293b] via-[#0f172a] to-black opacity-90" />


            <div className="absolute w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-[200px] -top-32 -left-40 z-0" />
            <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-0 right-0 z-0" />
            <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />


            <div className="z-10 text-center px-6 py-12 md:py-20 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-3xl max-w-3xl w-full mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    <TypingAnimation>Building Dreams in Code</TypingAnimation>
                </h1>

                <NumberTicker
                    value={101}
                    className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"
                />

                <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
                    Elevating experiences through intuitive design, powerful code, and relentless innovation.
                </p>

                <div className="flex justify-center gap-4 mt-6">

                    <Link href="mailto:yourname@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-200">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
