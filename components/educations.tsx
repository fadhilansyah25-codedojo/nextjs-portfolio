"use client";

import React from "react";
import { educationsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Educations() {
  const { ref } = useSectionInView("Educations", { amount: 0.6 });

  return (
    <motion.section
      ref={ref}
      id="educations"
      className="mb-20 max-w-[45rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* section title */}
      <SectionHeading>Educations</SectionHeading>

      {/* timeline container */}
      <ol className="relative mx-4 border-l border-gray-200 dark:border-gray-700 sm:mx-8">
        {educationsData.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
          >
            <TimelineElement {...item} />
          </motion.div>
        ))}
      </ol>
    </motion.section>
  );
}

type TimelineElementProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactElement;
};

const TimelineElement = ({
  title,
  date,
  location,
  description,
  icon,
}: TimelineElementProps) => (
  <li className="mb-10 ml-8 rounded-lg bg-white px-4 py-4 shadow-md">
    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white">
      {icon}
    </span>
    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
      {title}
    </h3>
    <p className="my-1 text-sm">{location}</p>
    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {date}
    </time>
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </li>
);
