"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";


interface Project {
    title: string;
    description: string;
    link: string;
    code: string;
    previewImage: string;
    technologies: string[];
}

const projectData: Project[] = [
    {
        title: "ChitChat-ChatApp",
        description: "This is a MERN-based chat app created using DaisyUI.",
        link: "https://chitchat-chatapp.onrender.com/",
        code: "https://github.com/AasthaSingh28/ChitChat-ChatAPP",
        previewImage: "/images/chat.png",
        technologies: ["MongoDB", "React", "Express", "Node", "Tailwind"],
    },
    {
        title: "Responsive Dashboard",
        description: "This is a responsive dashboard created using Next.js and Shadcn UI.",
        link: "https://responsive-dashboard-3nmb.vercel.app/",
        code: "https://github.com/AasthaSingh28/ResponsiveDashboard",
        previewImage: "/images/dash.png",
        technologies: ["Next.js", "Tailwind"],
    },

    {
        title: "CodePlus-CodePen-Clone",
        description: "This is a CodePen clone created using React.js focusing on responsiveness.",
        link: "https://66a927b83f3c716255d68760--dainty-trifle-c17112.netlify.app/",
        code: "https://github.com/AasthaSingh28/CodePen-Clone",
        previewImage: "/images/code.png",
        technologies: ["React", "Tailwind"],
    },
];

const Project = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Projects</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                {projectData.map((item, projectIndex) => (
                    <div key={`project-${projectIndex}`} className="flex flex-col border border-gray-100 rounded-md overflow-hidden">
                        <Image
                            src={item.previewImage}
                            width={400}
                            height={250}
                            alt={item.title}
                            className="w-full h-auto"
                        />
                        <div className="flex flex-col gap-3 p-4">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <div className="flex gap-1 flex-wrap">
                                {item.technologies.map((tech, techIndex) => (
                                    <div
                                        key={`tech-${projectIndex}-${techIndex}`}
                                        className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-2 relative z-50">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="default" >View</Button>
                                </a>
                                <a href={item.code} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" >Code</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
