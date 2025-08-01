"use client"
import { useState, useEffect } from "react";
import ContactMe from "@/components/ContactMe";
import { DockDemo } from "@/components/CustomDock";
import Education from "@/components/Education";
import Heading from "@/components/Heading";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { Meteors } from "@/components/magicui/meteors";
import Name from "@/components/Name";
import Project from "@/components/Project";
import { MarqueeDemo } from "@/components/Skills";
import Work from "@/components/Work";
import { NumberTickerDemo } from "@/components/NumberTIckerDemo";

export default function Home() {
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMainContent(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!showMainContent ? (
                <NumberTickerDemo />
            ) : (
                <div>
                    <div>
                        {/* Mobile (bottom fixed) */}
                        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
                            <DockDemo  />
                        </div>

                        {/* Desktop (left side) */}
                        <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:block">
                            <DockDemo  />
                        </div>
                    </div>

                    <div className="relative lg:w-9/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p- font-[family-name:var(--font-geist-sans)] overflow-hidden">
                        <InteractiveGridPattern className="absolute inset-0 opacity-10" />
                        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
                            <Meteors />
                            <Name />
                            <Heading />
                            <Work />
                            <Education />
                            <MarqueeDemo />
                            <Project />
                            <ContactMe />
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}