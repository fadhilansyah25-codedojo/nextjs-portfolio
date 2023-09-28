"use client";

import { beginnerSkills, moderateSkills, skills, skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

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
      className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>

      {/* strong skills */}
      <h2>Strong Skills</h2>
      <hr className="mb-4 mt-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <ul className="text-md grid grid-cols-2 gap-4 text-gray-800 sm:grid-cols-3">
        {skills.map((skill, index) => (
          <ItemSkill
            skill={skill.label}
            Icon={skill.icon}
            key={index + "-" + skill}
            index={index}
          />
        ))}
      </ul>

      {/* moderate skills */}
      <div className="mt-8">
        <h2>Moderate Skills</h2>
        <hr className="mb-4 mt-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <ul className="text-md grid grid-cols-2 gap-4 text-gray-800 sm:grid-cols-3">
          {moderateSkills.map((skill, index) => (
            <ItemSkill
              skill={skill.label}
              Icon={skill.icon}
              key={index + "-" + skill}
              index={index}
            />
          ))}
        </ul>
      </div>

      {/* currently skills */}
      <div className="mt-8">
        <h2>Side Learn Skills</h2>
        <hr className="mb-4 mt-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <ul className="text-md grid grid-cols-2 gap-4 text-gray-800 sm:grid-cols-3">
          {beginnerSkills.map((skill, index) => (
            <ItemSkill
              skill={skill.label}
              Icon={skill.icon}
              key={index + "-" + skill}
              index={index}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

const ItemSkill = ({
  skill,
  Icon,
  index = 0,
}: {
  skill: string;
  Icon?: IconType;
  index?: number;
}) => (
  <motion.li
    className="flex items-center gap-2 rounded-sm border border-black/[0.1] 
  bg-white px-3 py-1 shadow-sm dark:bg-white/10 dark:text-white/80"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={index}
  >
    {Icon ? <Icon /> : null}
    {skill}
  </motion.li>
);
