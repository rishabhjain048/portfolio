
import { Briefcase, FileText } from "lucide-react";

const experiences = [
  {
    company: "Shreyansh Coding School",
    role: "Frontend Development Intern",
    duration: "6 months",
    description: "Worked on building Frontend services using React.js, Html, Css, TailwindCss. Designed REST APIs and Data fetching."
  },
  {
    company: "Dathub Technologies",
    role: "Software Development Intern",
    duration: "6 months",
    description: "Developed scalable project solutions using React.js and worked on data management with MongoDB. Collaborated on improving API efficiency and security."
  }
];

const Experience = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1KtfIlnCM1Tus4BpDg3XaUrKsBbtyCfpz";
    link.download = "Rishabh_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg py-10 w-full">
      {/* Experience Section */}
      <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-blue-600 dark:text-blue-400">
        <Briefcase /> Experience
      </h2>
      <div className="w-full max-w-4xl grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">{exp.role} ({exp.duration})</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Resume Section */}
      <div className="mt-12 w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3 text-blue-600 dark:text-blue-400">
          <FileText /> Resume
        </h2>
        <img 
          src="https://res.cloudinary.com/db8s5neff/image/upload/v1743325794/reume_zybpcw.png" 
          alt="Resume Preview" 
          className="w-full max-w-md rounded-lg border border-gray-300 dark:border-gray-700 shadow-md"
        />
        <div className="flex gap-4 mt-4">
          <a 
            href="https://drive.google.com/file/d/1KtfIlnCM1Tus4BpDg3XaUrKsBbtyCfpz/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            View Resume
          </a>
          <button 
            onClick={handleDownload} 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
