import React from 'react';
import { TypingAnimation } from './magicui/typing-animation';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { InteractiveGridPattern } from './magicui/interactive-grid-pattern';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className="w-full pt-20 pb-10 flex flex-col gap-6 relative text-black dark:text-white">
            <InteractiveGridPattern className="absolute inset-0 opacity-10 " />

            <div className="text-center">
                <TypingAnimation className="text-3xl font-bold">Get in touch and Contact me.</TypingAnimation>
            </div>

            <div className="flex justify-center">
                <InteractiveHoverButton>Let's get in touch.</InteractiveHoverButton>
            </div>

            {/* Footer */}
            <footer className="w-full mt-10 py-6 border-t border-gray-600 text-center">
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/AasthaSingh28" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/aastha-singh-0167b3257/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaLinkedin />
                    </a>

                </div>
                <p className="text-sm mt-3 text-gray-500">© 2025 Aastha Singh. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ContactMe;
