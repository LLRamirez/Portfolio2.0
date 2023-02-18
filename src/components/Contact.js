import React from "react";
import { MailIcon } from "@heroicons/react/solid";

import { Wave } from 'react-animated-text';

const Mailto = ({ email, subject, body, ...props }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex flex-col justify-center h-2/3">
        <div className="text-3xl text-white shadow flex flex-row justify-center underline underline-offset-2 pt-8">
          
          <Mailto email="linlidiaramirez@gmail.com" subject="Potential collab" body="">
            <Wave text="CONTACT ME" effect="stretch" effectChange={2.0} />
            
            </Mailto>
            
            <div className="pl-1.5">
              <MailIcon className="mx-auto w-10 mb-4 yahGreen" />
            </div>
          
        </div>
        <div className="w-full">
<div className="flex flex-row justify-between text-xs">
        <p>© All rights reserved</p>

        <a href="#about" class="hover:text-white text-sm">
        <p>Back ^ top</p>
        </a>
        </div>
</div>
      </div>
    </section>
  );
}