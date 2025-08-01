import React from "react";

const Name = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-50 px-6 backdrop-blur-md bg-white/60 dark:bg-[#0F0F0F]/60 border-b border-white/20 dark:border-white/10 shadow-md flex items-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter
          bg-gradient-to-r from-emerald-400 to-cyan-400
          text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          aastha.
        </h1>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Name;
