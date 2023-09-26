"use client";

import { BsChevronDoubleDown, BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-0 flex flex-col items-center gap-3 sm:my-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="hidden h-16 w-[1.5px] rounded-full bg-gray-300 sm:block"></div>
      <motion.div
        className="flex flex-col items-center text-gray-600 font-medium dark:text-white"
        animate={{
          opacity: [0.3, 0.6, 0.8, 1, 1, 0.8, 0.6, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: 0.5
        }}
      >
        <BsMouse className="hidden sm:block" />
        <BsChevronDoubleDown className="sm:hidden" />
        <p className="text-xs">scroll down</p>
      </motion.div>
    </motion.div>
  );
}
