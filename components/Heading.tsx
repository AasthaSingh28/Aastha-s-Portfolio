"use client"
import React from 'react'
import Image from 'next/image'
import { MorphingText } from './magicui/morphing-text'

import { BoxReveal } from './magicui/box-reveal';


const texts = [
    "Hey!",
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Namaskar!"

];

const Heading = () => {
    return (
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4 w-9/12'>
                <h1 className='text-xl font-medium mb-4'>
                    <MorphingText texts={texts} />
                </h1>

                <h2 className='text-4xl font-bold'>I am Aastha</h2>


                <p className='text-base dark:text-gray-400 text-gray-700'>
                    I am Aastha Singh, a dedicated 3rd-year IT student with a strong passion for web development. With proficiency in both C and C++. My current technical focus is on mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) to develop robust and scalable web applications. I am actively exploring Next.js to broaden my expertise and become a versatile full-stack developer.
                    Let's connect and explore opportunities for collaboration and growth in the exciting field of web development.
                </p>

            </div>
            <div className='3/12 flex-1'>
                <Image src="/images/aastha.png" alt='Aastha' width={200} height={200} className='rounded-full border-gray-100 h-36 w-36' />
            </div>

        </div>

    )
}

export default Heading
