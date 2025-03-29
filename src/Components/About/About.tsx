
import AboutImg from "../../assets/aboutsvg.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-gray-900 flex flex-col md:flex-row items-center justify-between w-screen px-6 md:px-16 py-12 md:py-24 bg-white"
    >
      {/* Left Section (Image) */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-xl shadow-lg"
          src={AboutImg}
          alt="About"
        />
      </div>

      {/* Right Section (Text & Icons) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">About</h2>
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
            <li key={index} className="flex gap-4 items-start">
              <IoArrowForward size={30} className="mt-1 text-blue-500" />
              <div className="w-full md:w-96">
                <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm md:text-lg leading-relaxed text-gray-700">
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
