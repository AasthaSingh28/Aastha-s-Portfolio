
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




export default function Home() {
  return (
    <div>

      <DockDemo />
      <div className="relative w-9/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">

        <InteractiveGridPattern className="absolute inset-0 opacity-10 " />

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
  );
}
