import React from 'react'

interface EduItem {
    startDate: string;
    endDate: string;
    collegeName: string;
    courseName: string;
    address: string;
}

const EduData: EduItem[] = [
    {
        startDate: "Oct 2022",
        endDate: "June 2026",
        collegeName: "College of Technology, GBPUA&T Pantnagar",
        courseName: "B.Tech",
        address: "Pantnagar, Uttrakhand, India",
    },
    {
        startDate: "April 2020",
        endDate: "March 2021",
        collegeName: "Glacier Public School",
        courseName: "Intermediate",
        address: "Dehradun, Uttrakhand, India",
    },
    {
        startDate: "April 2018",
        endDate: "March 2019",
        collegeName: "Glacier Public School",
        courseName: "High School",
        address: "Dehradun, Uttrakhand, India",
    }

]

const Education = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold'> Education </h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                {EduData.map((item, index) => (
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.collegeName}</h3>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.courseName}</h4>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.address}</p>
                    </li>
                ))}

            </ol>


        </div>
    )
}

export default Education
