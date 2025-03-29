import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Shreyansh Coding School",
    role: "Backend Development Intern",
    duration: "6 months",
    description: "Worked on building backend services using Node.js and Express. Designed REST APIs and integrated MongoDB for data storage."
  },
  {
    company: "Dathub Technologies",
    role: "Software Development Intern",
    duration: "6 months",
    description: "Developed scalable backend solutions using Node.js and worked on data management with MongoDB. Collaborated on improving API efficiency and security."
  }
];

const Experience = () => {
  return (
    <div className="py-10 px-5 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold mb-6 flex items-center gap-2 text-blue-600  dark:text-blue-400">
        <Briefcase /> Experience
      </h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">{exp.role} ({exp.duration})</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
