import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center text-white p-4 md:px-16 lg:px-24 bg-gray-900 shadow-lg">
      {/* Logo */}
      <span className="text-3xl font-bold tracking-wide text-blue-500"><a href="/">Rj</a></span>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 text-center font-semibold rounded-lg shadow-md md:shadow-none transition-all duration-300 ${
          isOpen || !isMobile ? "opacity-100 block" : "opacity-0 hidden"
        } md:flex md:items-center space-y-4 md:space-y-0 md:gap-10`}
      >
        {["Home", "About", "Experience", "Project", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <li key={item} className="text-lg transition-all duration-300 hover:scale-105">
              <a href={path} className="block py-2 px-6 rounded-md hover:bg-blue-500 hover:text-white">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
