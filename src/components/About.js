import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:pr-20 md:pr-16 text-center md:text-left mb-16 md:mb-0 md:order-2">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white fade-in">
            Hi, I'm <span className="highlight">KarpagaPriya</span>.
            <br className="hidden lg:inline-block" /> <br />
            I love to Build Engaging Digital Experiences.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio! I specialize in Logo & Branding design, UI/UX design, and front-end development.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
            <a
              href="#contact"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-2 md:mb-0 md:mr-2 transition duration-300 ease-in-out transform hover:scale-110"
              style={{ minWidth: '10rem' }} // Added min width to ensure consistent button sizes
            >
              Collaborate with Me
            </a>
            <a
              href="#contact"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg md:ml-2 transition duration-300 ease-in-out transform hover:scale-110"
              style={{ minWidth: '10rem' }} // Added min width to ensure consistent button sizes
            >
              Explore My Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-auto md:mx-0 md:order-1">
          <img
            className="object-cover object-center rounded animate-float"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
