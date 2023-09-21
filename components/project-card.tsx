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

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="mb-3 last:mb-0 sm:mb-8"
    >
      <section
        className="
      group relative max-w-[42rem] overflow-hidden 
      border border-black/5 bg-gray-100 transition odd:pl-8
      hover:bg-gray-200 sm:h-[20rem] sm:pr-8"
      >
        {/* project desc */}
        <div
          className="flex h-full flex-col px-5 pb-7 pt-4 group-odd:ml-[18rem] 
          sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10"
        >
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-md bg-black/[0.7] px-3 py-1 text-[0.7rem] 
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
          className="group-odd:-right-[initial] absolute -right-40 top-8 
          w-[28.25rem] rounded-t-lg shadow-2xl 
          transition 
          group-odd:-left-40
          group-hover:-translate-x-3

          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-hover:scale-105

          group-odd:group-hover:-translate-y-3 
          group-odd:group-hover:translate-x-3 
          group-odd:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
