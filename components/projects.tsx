"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", { amount: 0.2 });

  return (
    <section ref={ref} id="projects" className="mb-20 mt-28 max-w-[45rem] scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
