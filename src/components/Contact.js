import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        alert("Thank you for your message! We'll be in touch soon.");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert("Oops! Something went wrong."));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <section id="contact" className="relative bg-gray-900 text-white py-20">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Thirumohur+Road,+Otthakadai,+Anbu+Nagar,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Address
              </h2>
              <p className="mt-1">46, Othakadai, Madurai - 625107</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a
                href="mailto:karpagapriya.ak@gmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                karpagapriya.ak@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Phone
              </h2>
              <p className="leading-relaxed">+91 9080437163</p>
            </div>
          </div>
        </div>
        <form
          name="contact" 
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          netlify="true"
          data-netlify="true">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's Collaborate
          </h2>
          <p className="leading-relaxed mb-5">
            Let's Collaborate: Together, we can bring your vision to life. Whether it's crafting captivating visuals, developing innovative designs, or enhancing user experiences, I'm here to collaborate and create something exceptional with you. Let's turn ideas into reality and make an impact together.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Feel Free to Reach Out
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Get in Contact
          </button>
        </form>
      </div>
    </section>
  );
}
