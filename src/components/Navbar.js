import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        <div className="flex items-center">
        <a href="#about">
                    <img src="/logo.svg" alt="Logo" className="h-10 ml-4 md:ml-20" />
                </a>          <a href="#about" className="ml-3 text-xl">
          <p className="text-white text-2xl font-bold md:ml-2 hidden md:block">KarpagaPriya</p> {/* Hide on mobile */}
          </a>
        </div>
        <div className="relative md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <ChevronUpIcon className="w-6 h-6 text-white" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-white" />
            )}
          </button>
          {isMenuOpen && (
  <div className="fixed top-16 md:top-0 right-0 md:right-auto md:left-0 md:relative md:bg-transparent bg-gray-800 w-full md:w-auto z-20 flex flex-col md:flex-row items-center justify-center md:justify-end">
    <a
      href="#projects"
      className="block text-gray-300 hover:text-white px-4 py-2 border-b border-gray-700 md:border-b-0"
    >
      Portfolio
    </a>
    <a
      href="#skills"
      className="block text-gray-300 hover:text-white px-4 py-2 border-b border-gray-700 md:border-b-0"
    >
      Skills
    </a>
    <a
      href="#testimonials"
      className="block text-gray-300 hover:text-white px-4 py-2 border-b border-gray-700 md:border-b-0"
    >
      Testimonials
    </a>
    <a
      href="#resume"
      className="block text-gray-300 hover:text-white px-4 py-2 border-b border-gray-700 md:border-b-0"
    >
      Resume
    </a>
    
  </div>
)}


        </div>
        <nav className="hidden md:flex items-center">
          <a
            href="#projects"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md"
          >
            Portfolio
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md"
          >
            Testimonials
          </a>
          <a
            href="#resume"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md"
          >
            Resume
          </a>
          
        </nav>
        <a
          href="#contact"
          className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center mr-4 md:mr-20" // Adjusted the margin
        >
          Let's Work Together
        </a>
      </div>
    </header>
  );
}
