import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { project } from "../data";

export default function Project() {
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
          {project.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="group relative block overflow-hidden rounded-lg"
            >
              <div className="relative h-64 md:h-72">
                <img
                  alt="project"
                  className="w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 p-4 bg-gray-900 bg-opacity-90 transition duration-300 opacity-0 group-hover:opacity-100">
                  <h2 className="text-sm font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-sm leading-relaxed text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
