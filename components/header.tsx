"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      {/* Navigation Background and Shape */}
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2
       rounded-none border border-gray-200 border-opacity-40 bg-white/[0.5] bg-opacity-80 shadow-lg
       shadow-black/[0.03] backdrop-blur-[0.3rem] sm:top-6 sm:h-[3.25rem] sm:w-[44rem] sm:rounded-md"
        initial={{
          y: -100,
          x: "-50%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
        }}
      ></motion.div>

      {/* Navigation list  */}
      <nav
        className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial]
       sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] 
        font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            /* list item of navigation link */
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {/* navigation link */}
              <Link
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 
                 transition hover:text-gray-950`,
                  {
                    "text-gray-950": activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* link background when section is active */}
                {link.name === activeSection ? (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-lg bg-gray-300/50 backdrop-blur-sm"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
