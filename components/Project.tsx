"use client"; // Ensure this runs on the client side

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
        description: "This is a responsive dashboard created using Next.js and ShadCN UI.",
        link: "https://responsive-dashboard-3nmb.vercel.app/",
        code: "https://github.com/AasthaSingh28/ResponsiveDashboard",
        previewImage: "/images/dash.png",
        technologies: ["Next.js", "Tailwind"],
    },
    {
        title: "Project 3",
        description: "This is a description of project 3.",
        link: "https://example.com/project3",
        code: "https://github.com/user/project3",
        previewImage: "/images/project3.png",
        technologies: ["MongoDB", "Express"],
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
            <div className="grid grid-cols-2 gap-4">
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
                            <div className="flex gap-2 mt-2">
                                <Button
                                    variant="default"
                                    onClick={() => window.open(item.link, "_blank")}
                                >
                                    View
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open(item.code, "_blank")}
                                >
                                    Code
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
