"use client"

import React from "react"
import Image from "next/image"
import { MorphingText } from "./magicui/morphing-text"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Heading = () => {
    const { ref, inView } = useInView({ triggerOnce: true })

    const texts = ["Hey!", "Hello!", "Bonjour!", "Hola!", "Namaskar!"]

    return (
        <div className='flex gap-4 max-w-8xl sm:flex-row flex-col-reverse justify-center items-center'>
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:w-8/12">
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    <MorphingText texts={texts} className="mb-4" />
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    I’m Aastha Singh
                </h2>


                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                    I&apos;m a passionate IT student deeply immersed in the world of full-stack web development. With a solid foundation in C and C++, I&apos;m currently mastering the{" "}
                    <span className="font-medium text-emerald-500">MERN stack</span> to craft responsive, scalable, and modern web applications. I&apos;m also actively exploring{" "}
                    <span className="font-medium text-cyan-500">Next.js</span> to broaden my skills and become a versatile developer.
                    <br />
                    <br />
                    Let&apos;s collaborate and build something extraordinary. I&apos;m always open to exciting ideas, new technologies, and meaningful opportunities.
                </p>
            </div>

            {/* Right Profile Image */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 1 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-400"
            >
                <Image
                    src="/images/aastha.png"
                    alt="Aastha"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                />
            </motion.div>

        </div>
    )
}

export default Heading
