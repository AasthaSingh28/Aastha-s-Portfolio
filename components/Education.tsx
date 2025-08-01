"use client";

import React from "react";
import { School, BookOpenCheck, GraduationCap } from "lucide-react";

import type { ReactNode } from "react";

interface EduItem {
  startDate: string;
  endDate: string;
  collegeName: string;
  courseName: string;
  address: string;
  icon: ReactNode;
}

const EduData: EduItem[] = [
  {
    startDate: "Oct 2022",
    endDate: "June 2026",
    collegeName: "College of Technology, GBPUA&T Pantnagar",
    courseName: "B.Tech",
    address: "Pantnagar, Uttarakhand, India",
    icon: <GraduationCap className="w-4 h-4 text-emerald-500" />,
  },
  {
    startDate: "April 2020",
    endDate: "March 2021",
    collegeName: "Glacier Public School",
    courseName: "Intermediate",
    address: "Dehradun, Uttarakhand, India",
    icon: <BookOpenCheck className="w-4 h-4 text-cyan-500" />,
  },
  {
    startDate: "April 2018",
    endDate: "March 2019",
    collegeName: "Glacier Public School",
    courseName: "High School",
    address: "Dehradun, Uttarakhand, India",
    icon: <School className="w-4 h-4 text-pink-500" />,
  },
];

const Education = () => {
  return (
    <section className="px-4 md:px-8 py-10 mt-4 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-emerald-500 dark:text-cyan-400 tracking-tight">
        Education
      </h2>

      <ol className="relative border-s-2 border-emerald-200 dark:border-cyan-800 space-y-10">
        {EduData.map((item, index) => (
          <li key={index} className="ms-6">
            {/* Dot */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white border-2 border-emerald-400 dark:border-cyan-400 rounded-full -start-3">
              {item.icon}
            </span>

            {/* Content */}
            <time className="block text-sm mb-1 text-gray-500 dark:text-gray-400">
              {item.startDate} – {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.courseName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.collegeName}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
