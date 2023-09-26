"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = React.useState<Theme>("light");

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[2.5rem] w-[2.5rem] items-center 
    justify-center rounded-full border-2 border-yellow-500 bg-white bg-opacity-80 
    shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] 
    active:scale-105 dark:bg-gray-900/70 dark:text-yellow-400"
      onClick={toogleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
