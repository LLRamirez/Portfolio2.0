import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 border-b-blue-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
        
          <a href="#about" class="text-3xl">
          <img src="./cat.png"/>
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-5 text-gray-400 hover:text-white">
            Work
          </a>
          {/* <a href="#skills" className="mr-5 text-gray-400 hover:text-white">
            Skills
          </a> */}
          <a href="#blog" className="mr-5 text-gray-400 hover:text-white">
          Blog
          </a>
          {/* <a href="#testimonials" className="mr-5 text-gray-400 hover:text-white">
            Art
          </a> */}
           <a href="#testimonials" className="mr-5 text-gray-400 hover:text-white">
            Travel
          </a>
        </nav>
        <div class="flex flew-row justify-around w-300 items-center">
        <p>Let's make</p>
          <a
            href="#contact"
            className="inline-flex text-gray-400 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            
            <img src="./g-lamp.png"/>
          </a>
        </div>
      </div>
    </header>
  );
}