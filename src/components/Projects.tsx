import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Rap Notes",
    description:
      "Introductie van de ultieme notitie-app voor rappers, nu met een krachtige rijmfunctie die je schrijven naar een hoger niveau tilt!",
    image: "/rap-notes.jpg",
    link: "https://play.google.com/store/apps/details?id=com.emrey.RapNotes&hl=nl&gl=US",
  },
  {
    name: "Autorijschool Akkas",
    description:
      "Plan vandaag nog een gratis proefles in en omarm het plezier van autorijden!",
    image: "/autorijschoolakkas.jpg",
    link: "https://www.autorijschoolakkas.nl/",
  },
  {
    name: "La Fiore",
    description:
      "Bij La Fiore bent u op het juiste adres voor de lekkerste hartige en zoete broodjes.",
    image: "/la fiore.jpg",
    link: "https://www.la-fiore.nl/",
  },
];

const Projects = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <section
        className="w-full mx-auto px-4 sm:px-20 top-0 z-50"
        id="Portfolio"
      >
        <h1 className="my-10 text-center font-bold text-4xl">
          Portfolio
          <hr className="w-4 h-4 mx-auto my-4 bg-[#F2B950] border-0 rounded-full"></hr>
        </h1>

        <div className="flex flex-col space-y-20">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12 bg-white rounded-2xl">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="hover:opacity-70 rounded-l-2xl bg-cover"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2 p-9">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 text-[#F2B950]">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
