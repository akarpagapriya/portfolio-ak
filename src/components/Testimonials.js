import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <UsersIcon className="w-10 inline-block mb-4 text-green-500" />
          <h2 className="sm:text-4xl text-3xl font-medium mb-6">
            Words from Our Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
              <img src="/logow.svg" alt="Logo" className="w-8 inline-block mb-4 text-green-500" />                <p className="text-lg leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <img
                  alt="testimonial"
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-green-500">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
