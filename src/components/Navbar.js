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
        <img src="/logo.svg" alt="Logo" className="h-10 ml-10" /> 
          <p className="text-white text-2xl font-bold md:ml-4 ml-4">KarpagaPriya</p> 
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
            <div className="absolute top-full left-0 mt-2 bg-gray-800 py-2 rounded-md shadow-lg">
              <a
                href="#projects"
                className="block text-gray-300 hover:text-white px-4 py-2"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                className="block text-gray-300 hover:text-white px-4 py-2"
              >
                Skills
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white px-4 py-2"
              >
                Testimonials
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
        </nav>
        <a
          href="#contact"
          className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center mr-20"
        >
          Let's Work Together
        </a>
      </div>
    </header>
  );
}
