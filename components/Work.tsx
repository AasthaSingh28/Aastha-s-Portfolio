import React from "react";
import Image from "next/image";
import { Briefcase, Code, GitBranch } from "lucide-react";

import type { ReactNode } from "react";

interface WorkItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  logo: string;
  icon: ReactNode;
  description: string[];
}

const WorkData: WorkItem[] = [
  {
    startDate: "June 2025",
    endDate: "August 2025",
    companyName: "Nexzem Technologies Pvt Ltd",
    jobTitle: "Frontend Developer Intern",
    logo: "/logo/nexzem.jpeg",
    icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
    description: ["Developed and deployed a full-stack web application using React, Redux, Next.js, TanStack Query, and AWS with a focus on performance, scalability, and modern development practices."],
  },
  {
    startDate: "October 2024",
    endDate: "November 2024",
    companyName: "GirlScript Summer of Code",
    jobTitle: "Open Source Contributor",
    logo: "/logo/girl.jpeg",
    icon: <GitBranch className="w-4 h-4 text-cyan-500" />,
    description: [
      "Fixed issues, improved documentation, and added new features to various open-source repositories.",
    ],
  },
  {
    startDate: "October 2024",
    endDate: "November 2024",
    companyName: "Hacktoberfest",
    jobTitle: "Contributor",
    logo: "/logo/hacktober.jpeg",
    icon: <GitBranch className="w-4 h-4 text-pink-500" />,
    description: [
      "Hands-on contributions to open-source using Git & GitHub. Learned collaboration best practices.",
    ],
  },
  {
    startDate: "July 2024",
    endDate: "August 2024",
    companyName: "Unified Mentor",
    jobTitle: "Web Development Intern",
    logo: "/logo/unified.jpeg",
    icon: <Code className="w-4 h-4 text-purple-500" />,
    description: [
      "Built responsive interfaces using MERN stack. Worked on APIs, databases, and version control.",
    ],
  },
];

const Work = () => {
  return (
    <section className="px-4 md:px-8 py-10 mt-4 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-emerald-500 dark:text-cyan-400 tracking-tight">
        Work Experience
      </h2>

      <ol className="relative border-s-2 border-emerald-200 dark:border-cyan-800 space-y-10">
        {WorkData.map((item, index) => (
          <li key={index} className="ms-6">
            {/* Dot */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white border-2 border-emerald-400 dark:border-cyan-400 rounded-full -start-3">
              {item.icon}
            </span>

            {/* Content Box */}
            <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              {/* Top Row: Logo + Titles */}
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={item.logo}
                  alt={`${item.companyName} logo`}
                  width={40}
                  height={40}
                  className="rounded-md shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.jobTitle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.companyName}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <time className="block text-sm mb-2 text-gray-500 dark:text-gray-400">
                {item.startDate} – {item.endDate}
              </time>

              {/* Description */}
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                {item.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Work;
