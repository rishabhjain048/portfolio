import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white p-4 md:px-12 lg:px-20 bg-black">
      {/* Logo */}
      <span className="text-2xl font-bold tracking-wide">Rj</span>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 text-center font-semibold rounded-xl transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center space-y-2 md:space-y-0 md:gap-8`}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <li key={item} className="text-lg transition-all duration-300">
            <a href={`#${item}`} className="block py-2 px-4 hover:text-gray-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
