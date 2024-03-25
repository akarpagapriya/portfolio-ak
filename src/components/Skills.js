import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4 text-green-600" />
          <h2 className="sm:text-4xl text-3xl font-medium text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base leading-relaxed xl:w-3/5 lg:w-2/3 mx-auto text-gray-600">
            Versatile in both design and development, proficient in UI/UX principles and front-end technologies, bringing a holistic approach to crafting engaging digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mr-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <BadgeCheckIcon className="text-green-500 w-6 h-6 mr-2" />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
