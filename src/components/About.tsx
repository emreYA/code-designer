import React from "react";
import { AiOutlineGithub, AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJsSquare } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiPython,
} from "react-icons/si";

const icons = [
  { icon: AiFillHtml5 },
  { icon: FaCss3Alt },
  { icon: FaJsSquare },
  { icon: SiTypescript },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiPython },
  { icon: SiTailwindcss },
  { icon: SiGit },
  { icon: AiOutlineGithub },
];

const About = () => {
  return (
    <section
      className="w-full mx-auto px-4 sm:px-10 md:px-16 lg:px-32 top-0 z-50 bg-white"
      id="Over mij"
    >
      <div className="my-12 pb-12 pt-4 md:pt-16 md:pb-20">
        <h1 className="text-center font-bold text-4xl ">
          Over mij
          <hr className="w-4 h-4 mx-auto my-4 bg-[#F2B950] border-0 rounded-full"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 lg:p-10">
            <p>
              Welkom op mijn portfoliopagina! Mijn naam is Emre en ik ben een{" "}
              <span className="font-bold">{"programmeur"}</span>, en
              <span className="font-bold">{" ontwerper"}</span>, gevestigd in
              Haarlem.
            </p>
            <br />
            <p>
              Ik heb een passie voor het maken van mooie en functionele websites
              en applicaties die uitzonderlijke gebruikerservaringen bieden. Of
              het nu gaat om het maken van code of het ontwerpen van interfaces,
              ik ben altijd bereid om te leren en te groeien.
            </p>
            <br />
            <p>
              Mijn reis in de wereld van coderen en designen begon enkele jaren
              geleden en sindsdien heb ik mijn vaardigheden aangescherpt door
              talloze uren oefenen en experimenteren. Ik ben goed thuis in
              verschillende programmeertalen en ontwerptools en ik ben altijd op
              zoek naar{" "}
              <span className="font-bold text-[#F2B950]">
                uitbreiding van mijn kennis.
              </span>
            </p>
            <br />
            <p>
              Neem even de tijd om mijn portfolio te verkennen en neem contact
              met me op als je geïnteresseerd bent om samen te werken. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left lg:p-10">
            <h1 className="text-2xl font-bold mb-6">Mijn vaardigheden</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start items-center">
              {icons.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className=" px-4 py-2 mr-2 mt-2 text-[#A4A4A6] rounded font-semibold flex hover:text-[#D99C52]"
                  >
                    <item.icon size={64} className=" mr-2" />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
