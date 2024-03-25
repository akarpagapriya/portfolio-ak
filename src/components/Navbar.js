import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        <a href="#about" className="text-white text-2xl font-bold ml-20">
          KarpagaPriya
        </a>
        <nav className="md:flex items-center hidden">
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
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </header>
  );
}
