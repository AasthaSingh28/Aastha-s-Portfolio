'use client';

import React from 'react';
import { TypingAnimation } from './magicui/typing-animation';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { InteractiveGridPattern } from './magicui/interactive-grid-pattern';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <div className="w-full pt-24 pb-16 flex flex-col items-center gap-8 relative text-black dark:text-white">
      {/* Subtle Background Pattern */}
      <InteractiveGridPattern className="absolute inset-0 opacity-10 pointer-events-none" />

      {/* Header with Typing Animation */}
      <div className="text-center z-10">
        <TypingAnimation className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
          Get in touch and Contact me.
        </TypingAnimation>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          I&apos;m open to exciting collaborations, internships, and tech projects. Feel free to drop a message!
        </p>
      </div>

      {/* Contact Button */}
      <div className="z-10">
        <Link href="mailto:aasthasinghddun@gmail.com">
          <InteractiveHoverButton>Let&apos;s get in touch</InteractiveHoverButton>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="z-10 mt-6 flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/AasthaSingh28"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aastha-singh-0167b3257/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400 z-10">
        © 2025 <span className="text-emerald-400 font-semibold">Aastha Singh</span>. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ContactMe;
