import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:pr-20 md:pr-16 text-center md:text-left mb-16 md:mb-0 ml-10">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white ml-10">
            Hi, I'm KarpagaPriya.
            <br></br>
            <br className="hidden lg:inline-block" /> 
            I love to Build Engaging Digital Experiences.
          </h1>
          <p className="mb-8 leading-relaxed ml-10">
            Welcome to my portfolio! I specialize in Logo & Branding design, UI/UX design, and front-end development.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start ml-10">
            <a
              href="#contact"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mr-4 mb-4 md:mb-0"
            >
              Collaborate with Me
            </a>
            <a
              href="#contact"
              className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mr-4 mb-4 md:mb-0"
            >
              Explore My Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-auto md:mx-0">
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
