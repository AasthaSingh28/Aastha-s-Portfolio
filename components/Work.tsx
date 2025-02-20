import React from 'react'

interface WorkItem {
    startDate: string;
    endDate: string;
    companyName: string;
    jobTitle: string;
    description: string[];
}

const WorkData: WorkItem[] = [
    {
        startDate: "October 2024",
        endDate: "November 2024",
        companyName: "GirlScript Summer of Code",
        jobTitle: "Contributor",
        description: [
            "Contributed to open-source projects by fixing issues, improving documentation, and adding new features. Collaborated with project contributors to enhance code quality.",
        ],
    },
    {
        startDate: "October 2024",
        endDate: "November 2024",
        companyName: "Hacktober Fest",
        jobTitle: "Contributor",
        description: [
            "Contributed to open-source repositories, gained hands-on experience with Git, GitHub, and best practices in version control and open-source contribution.",
        ],
    },
    {
        startDate: "July 2024",
        endDate: "August 2024",
        companyName: "Unified Mentor",
        jobTitle: "Web Development Intern",
        description: [
            "Worked on web development using the MERN stack, ensuring responsive UI/UX. Gained hands-on experience in API integration, database management, and version control with Git & GitHub.",
        ],
    },
];

const Work = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold'> Work Experience </h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {WorkData.map((item, index) => (
                    <li key={`${item.companyName}-${index}`} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                            {item.startDate} - {item.endDate}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.companyName}</h3>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle}</h4>
                        <p className="text-base font-normal dark:text-gray-400 text-gray-700">
                            {item.description.join(" ")}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Work;
