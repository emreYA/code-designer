import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  function greeting() {
    const currentTime = new Date().getHours();

    let greeting;
    if (currentTime >= 5 && currentTime < 12) {
      greeting = "Goedemorgen";
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = "Goedemiddag";
    } else if (currentTime >= 18 && currentTime < 24) {
      greeting = "Goedenavond";
    } else {
      greeting = "Goedenacht";
    }

    return greeting;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <section>
        <div className="flex flex-col text-center items-center justify-center p-8 sm:py-16 md:py-32 md:flex-row md:space-x-4 md:text-left bg-white rounded-3xl">
          <div className="md:mt-2 md:w-1/3">
            <Image
              className="rounded-full"
              src="/ik01.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">
              {greeting()}
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              Ik ben een{" "}
              <span className="font-semibold text-[#D99C52]">
                codeur en designer{" "}
              </span>
              gevestigd in Haarlem. Ik heb een passie voor het maken van mooie
              en functionele websites en applicaties
            </p>
            <Link
              href="/#Portfolio"
              className="text-neutral-100 font-semibold px-6 py-3 bg-[#F2B950] rounded shadow hover:bg-[#D99C52] cursor-pointer"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
