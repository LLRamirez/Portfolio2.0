import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../styles/data.js";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 yahGreen" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Code</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Front End Development. For more projects check out my <a href="https://github.com/LLRamirez"  rel="git link" target="_blank"><u>Github.</u></a> (See older stuff <a href="https://github.com/Linrmz007" rel="other git page" target="_blank"><u>here</u></a> )
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full lg:w-1/2 p-4"
              >
              <div 
              className="flex relative"
              >
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div 
                className="px-8 
                py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}