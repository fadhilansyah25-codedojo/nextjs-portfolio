import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const socials = [
  { icon: FaIcons.FaGithub, href: "https://github.com/fadhilansyah25" },
  {
    icon: FaIcons.FaLinkedin,
    href: "https://www.linkedin.com/in/fadhilansyah25",
  },
  { icon: FaIcons.FaInstagram, href: "https://instagram.com/fadhilansyah25" },
  { icon: FaIcons.FaTwitter, href: "https://twitter.com/fadhilansyah25" },
];

const skills = [
  { label: "JavaScript", icon: SiIcons.SiJavascript },
  { label: "TypeScript", icon: SiIcons.SiTypescript },
  { label: "HTML", icon: FaIcons.FaHtml5 },
  { label: "CSS", icon: SiIcons.SiCss3 },
  { label: "ReactJS", icon: FaIcons.FaReact },
  { label: "NextJS", icon: SiIcons.SiNextdotjs },
  { label: "NodeJS", icon: FaIcons.FaNodeJs },
  { label: "NPM", icon: FaIcons.FaNpm },
];

const moderateSkills = [
  { label: "Figma", icon: FaIcons.FaFigma },
  { label: "React Native", icon: FaIcons.FaReact },
];

const learnedSkills = [{ label: "Golang", icon: SiIcons.SiGo }];

const experience = [
  {
    title: "Frontend Developer at PT. Ganeshcom Mitra Solusi Digital",
    duration: "Aug 2021 - Present",
    description: `Contributing to several projects such as university systems, finance, oil & gas calculations, clinic systems, and landing pages as a Frontend Developer
  using React, NextJS, Javascript and Typescript as framework and programming language.`,
  },
];

const educations = [
  {
    title: "Primakara University",
    duration: "Sep 2022 - Mar 2023",
    description:
      "I am currently a fresh student or still in early semester. Here I majored in informatics engineering to develop skills in the IT field",
  },
  {
    title: "SMK N 1 Manggis",
    duration: "Jul 2018 - Jun 2021",
    description:
      "In high school I majored in computer and network engineering. This is where I started to learn about IT. But after graduating I prefer to develop my knowledge as a web developer rather than a network technician",
  },
];

export {
  socials,
  skills,
  learnedSkills,
  educations,
  experience,
  moderateSkills,
};
