import React from "react";
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Photography from "../components/Photography";

export default function App() {
  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      <About/>
      <Projects/>
      <Skills/>
      <Photography/>
      <Contact/>
    </main>
  );
}
