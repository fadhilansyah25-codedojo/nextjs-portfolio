"use client";

import React from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    /* using motion component because prevent dirty code and unreadable */
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      {/* project card section inner motion component */}
      <section
        className="relative max-w-[42rem] overflow-hidden 
      rounded-lg border border-black/5 bg-gray-100 transition
      hover:bg-gray-200 sm:h-[20rem] sm:pr-8 sm:group-odd:pl-8"
      >
        {/* project desc */}
        <div
          className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] 
          sm:pl-10 sm:pr-2 sm:pt-10 sm:group-odd:ml-[18rem]"
        >
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-sm bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* project image */}
        <Image
          src={imageUrl}
          alt={`${title} project image`}
          quality={95}
          placeholder="blur"
          className="rounded-lg sm:absolute sm:-right-40 sm:top-8 
          sm:w-[28.25rem] sm:rounded-t-lg

          sm:shadow-2xl
          sm:transition          
          sm:group-odd:-left-40 
          sm:group-odd:right-[0] 

          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3 
          sm:group-hover:-rotate-2 
          sm:group-hover:scale-[1.04] 
          sm:group-odd:group-hover:-translate-y-3

          sm:group-odd:group-hover:translate-x-3
          sm:group-odd:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
