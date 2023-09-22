import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "framer-motion";
import { SectionName } from "./types";

export function useSectionInView(
  sectionName: SectionName,
  optional: { amount: number } = { amount: 0 },
) {
  const { setActiveSection, timesOfLastClick } = useActiveSectionContext();
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: optional.amount });

  React.useEffect(() => {
    let isMount = true;

    if (isInView && isMount && Date.now() - timesOfLastClick > 1000) {
      setActiveSection(sectionName);
    }

    return () => {
      isMount = false;
    };
  }, [isInView, setActiveSection, timesOfLastClick, sectionName]);

  return {
    ref,
  } as const;
}
