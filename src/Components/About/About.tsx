import AboutImg from "../../assets/aboutsvg.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen flex flex-col items-center justify-center w-screen p-6 md:px-16 lg:px-24 py-12 bg-gradient-to-b from-blue-50 to-gray-100"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center w-full mb-12 drop-shadow-md">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12">
        {/* Left Section (Image) */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
            src={AboutImg}
            alt="About"
          />
        </div>

        {/* Right Section (Text & Icons) */}
        <div className="md:w-1/2 text-center md:text-left space-y-8 p-4 bg-white shadow-lg rounded-xl border border-gray-200">
          <ul className="space-y-6">
            {[
              {
                title: "Frontend Developer",
                description:
                  "Building intuitive and interactive user interfaces using modern frameworks.",
              },
              {
                title: "Database Developer",
                description:
                  "Designing and managing efficient database solutions for high-performance applications.",
              },
              {
                title: "Backend Developer",
                description:
                  "Creating scalable and secure backend architectures to power web applications.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <IoArrowForward size={30} className="mt-1 text-blue-500" />
                <div className="w-full max-w-md">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
