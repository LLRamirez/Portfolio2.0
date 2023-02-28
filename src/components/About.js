import React from "react";
import Image from 'next/image'


export default function About() {

    return(
        <section id="about">
        <div className="container mx-auto flex flex-col-reverse pt-14 p-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
              <div class="flex font-link-bold flex-col">
              <ul class="text-4xl text-white font-semibold pt-6 pb-3 md:pt-0">Hola, I'm</ul>
              <h1
              class="font-bold text-6xl md:text-8xl shadow"
              >Lindsey</h1>
               <h1 class="font-bold text-6xl md:text-8xl shadow"
               >Lidia</h1>
              </div>
              <br className="hidden lg:inline-block" />
              
              <div class="text-white pt-12">
             <ul class="text-4xl font-semibold pb-3">I Code</ul>
             <a href="#projects" class="hover:text-white text-decoration:none">
                <li class="list-none text-xl font-extralight text-white"><span class="blinking">_</span>Sites / Apps
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 inline pb-1 pt-1 yahGreen" 
                fill="none" 
                alt="neon arrow pointing right"
      width={20}
      height={20}
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
                 </li>
                <li class="list-none text-xl font-extralight text-white"><span class="blinking">_</span>UI/UX (Infographics)</li>
                </a>
                <ul class="text-4xl font-semibold pb-3 pt-6">I Advocate</ul>
                <a href="https://www.cweonline.org/About-CWE/CWE-Staff/Staff-Detail/dirID/1069/a/Staff" target='_blank'>
                <li class="list-none text-xl font-extralight text-white"><span class="blinking">_</span>CWE 
                <svg 
                alt="neon arrow pointing right"
      width={20}
      height={20}
                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1 pt-1 yahGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
      
</li>
                </a>
                {/* <a href="blog" class="hover:text-pink">
                <li class="list-none text-xl font-extralight">_Blog, Media </li> 
                </a> */}
                <ul class="text-4xl font-semibold pb-3 pt-6">I Travel</ul>
                <a href="#travel" class="hover:text-white">
                <li class="list-none text-xl font-extralight text-white"><span class="blinking">_</span>Wax on | Wax off
                <svg 
                alt="neon arrow pointing right"
      width={20}
      height={20}
                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pb-1 pt-1 yahGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
                </li> 
                </a>
                <a href="#travel" class="hover:text-white">
                  <li class="list-none text-xl font-extralight text-white"><span class="blinking">_</span>Modelo</li>
                </a>
                </div>

                
               
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="me-sitting-down"
              src="./sideeye.png"
             
            />

          </div>
        </div>
      </section>
    );
}

