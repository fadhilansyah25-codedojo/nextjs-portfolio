"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import MarioGif from "@/public/chill-mario.gif";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", { amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-20 max-w-[45rem] scroll-mt-28 px-4 leading-7"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Informatics Engineering</span>, I embarked
        on a fulfilling journey to further my passion for programming. I
        enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Node.js, and Golang</span>
        . I am also familiar with TypeScript and Tailwind CSS, and I'm always
        eager to explore new technologies and expand my skill set. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, eager to contribute my expertise to innovative projects and
        dynamic teams.
      </p>

      <p className="mb-3">
        <span className="italic">In my downtime</span>, I indulge in various
        interests, including exploring the world of military technology,
        following the high-speed world of Formula 1 racing, and cheering for my
        favorite football clubs, Liverpool and Man City. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">islamic religion and philosophy</span>.
        I'm also learning how to public speaking.
      </p>

      <figure className="mt-8">
        <Image src={MarioGif} alt="mario-chill gif" className="mb-3" />
        <figcaption className="text-center text-xs text-blue-600 hover:cursor-pointer">
          <a href="https://www.behance.net/pixeljeff">
            Chill Mario by Pixel Jeff
          </a>
        </figcaption>
      </figure>
    </motion.section>
  );
}
