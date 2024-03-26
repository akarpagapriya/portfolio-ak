import React, { useState } from "react";
import { CodeIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { project } from "../data";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (link) => {
    window.location.href = link;
  };

  const toggleProjectDetails = (index) => {
    setExpandedProject(
      expandedProject === index ? null : index
    );
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Brands I've Crafted
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Explore a curated collection of logos meticulously crafted to convey unique identities and leave a lasting impression across various industries and sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {project.map((proj, index) => (
            <div key={index} className="relative col-span-1">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-72 object-cover cursor-pointer rounded-lg"
                  onClick={() => handleProjectClick(proj.link)}
                />
                <div
                  className="absolute inset-0 flex justify-between items-start p-4 bg-gray-900 bg-opacity-0 text-white transition-opacity hover:bg-opacity-90"
                  onMouseEnter={() => setExpandedProject(index)}
                  onMouseLeave={() => setExpandedProject(null)}
                >
                  <div>
                    <h2 className="text-sm font-medium text-green-400 mb-1">
                      {proj.subtitle}
                    </h2>
                    <h1 className="text-lg font-medium text-white mb-2">
                      {proj.title}
                    </h1>
                  </div>
                  <a
                    href={proj.link}
                    className="text-white bg-green-500 px-3 py-1 rounded-lg focus:outline-none flex items-center justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
