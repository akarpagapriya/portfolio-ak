import React from "react";

const Resume = () => {
  const resumeUrl = "/Karpagapriya Resume.pdf"; // Replace with the path to your PDF resume

  return (
    <section id="resume" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="sm:text-4xl text-3xl font-medium mb-6">
            Explore My Career Journey
          </h2>
          <p className="text-gray-400 text-sm">
            Discover my professional journey and see how I can contribute to Your Organization.
          </p>
        </div>
        <div className="flex justify-center fade-in-up">
          <a
            href={resumeUrl}
            className="bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-2 md:mb-0 md:mr-2 transition duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
