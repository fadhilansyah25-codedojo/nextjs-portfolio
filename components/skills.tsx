"use client";

import { skillsData } from "@/lib/data";
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

export default function Skills() {
  const { ref } = useSectionInView("Skills", { amount: 0.7 });

  return (
    <motion.section
      className="mb-28 mt-20 max-w-[45rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="text-md flex flex-wrap items-center justify-center gap-4 text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-sm border border-black/[0.1] bg-white px-3 
            py-1 shadow-sm"
            key={index + "-" + skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
