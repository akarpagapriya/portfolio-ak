import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-6 lg:px-8 object-cover object-center rounded animate-float">
        <div className="text-center mb-10">
          <ChipIcon className="mx-auto inline-block w-10 mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Skills & Technologies
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Versatile in both design and development, proficient in UI/UX principles and front-end technologies, bringing a holistic approach to crafting engaging digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mr-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center skill-item"> {/* Added skill-item class */}
              <BadgeCheckIcon className="text-green-500 w-6 h-6 mr-2" />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
