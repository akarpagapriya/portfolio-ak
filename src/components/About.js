import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 text-center md:text-left mb-16 md:mb-0 ml-10 mr-10">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm KarpagaPriya.
            <br className="hidden lg:inline-block" /> I love to Build Engaging digital experiences.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio! I specialize in Logo & Branding design, UI/UX design, and front-end development.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mr-4 mb-4 md:mb-0"
            >
              Collaborate with Me
            </a>
            <a
              href="#projects"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Explore My Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-5/6 mx-auto">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
