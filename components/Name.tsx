import React from "react";

const Name = () => {
    return (
        <>
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full h-16 bg-[#f8f9fa] dark:bg-[#1E1E1E] z-50 flex items-center px-4">
                <h1 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-5xl dark:text-[#A5C8D6] text-[#3F4E4F]">
                    aastha.
                </h1>
            </div>

            {/* Padding to prevent content from being hidden behind the fixed header */}
            <div className="h-16"></div>
        </>
    );
};

export default Name;

