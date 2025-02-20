"use client"

import React from 'react'
import Image from 'next/image'
import { MorphingText } from './magicui/morphing-text'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Heading = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const texts = [
        "Hey!",
        "Hello!",
        "Bonjour!",
        "Hola!",
        "Namaskar!"
    ];

    return (
        <div className='flex gap-4 sm:flex-row flex-col-reverse justify-center items-center'>
            <div className='flex flex-col gap-4 md:w-9/12 sm:w-full'>
                <h1 className='text-xl font-medium mb-4'>
                    <MorphingText texts={texts} />
                </h1>

                <h2 className='text-4xl font-bold'>I am Aastha</h2>

                <p className='text-base dark:text-gray-400 text-gray-700'>
                    I am Aastha Singh, a dedicated 3rd-year IT student with a strong passion for web development. With proficiency in both C and C++, my current technical focus is on mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) to develop robust and scalable web applications. I am actively exploring Next.js to broaden my expertise and become a versatile full-stack developer.
                    Let&apos;s connect and explore opportunities for collaboration and growth in the exciting field of web development.
                </p>
            </div>

            <div ref={ref} className='md:w-3/12 sm:w-full'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/images/aastha.png"
                        alt="Aastha"
                        width={144}
                        height={144}
                        className="rounded-full border-gray-100"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Heading;
