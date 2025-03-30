import AboutImg from "../../assets/aboutsvg.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="h-[100vh] flex flex-col md:flex-row items-center justify-center w-screen p-4 md:px-16 lg:px-24 py-12 bg-white"
    >
      {/* Left Section (Image) */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-xl"
          src={AboutImg}
          alt="About"
        />
      </div>

      {/* Right Section (Text & Icons) */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">About</h2>
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
  );
};

export default About;
