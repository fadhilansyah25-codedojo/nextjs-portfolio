import React from "react";

/* import image path */
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

/* import icons */
import { CgWorkAlt } from "react-icons/cg";
import { FaFigma, FaHtml5, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandGolang } from "react-icons/tb";
import { DiCss3, DiMysql } from "react-icons/di";
import {
  SiAiohttp,
  SiApollographql,
  SiBun,
  SiFirebase,
  SiGraphql,
  SiHasura,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    hash: "./#home",
  },
  {
    name: "About",
    hash: "./#about",
  },
  {
    name: "Skills",
    hash: "./#skills",
  },
  {
    name: "Experience",
    hash: "./#experience",
  },
  {
    name: "Educations",
    hash: "./#educations",
  },
  {
    name: "Contact",
    hash: "./#contact",
  },
  {
    name: "Projects",
    hash: "./projects",
  },
] as const;

export const experiencesData = [
  {
    title: "React and React Native Trainee Participant",
    location: "Hacktiv8 (PT Hacktivate Teknologi Indonesia)",
    description: `<p>Kemendikbud MSIB Kampus Merdeka Batch 3 in collaboration with Hacktiv8</p>
      <ul>
      <li>Understand the Basics and Fundamentals to become a React programmer, especially ReactJS and React Native.</li>
      <li>Implement Web Apps and Mobile Apps Interface development using the React/React Framework as needed.</li>
      <li>Perform online deployment with several 3rd Parties services.</li>
      <li>Understand the React/React Native framework end to end from development to deployment in a structured manner.</li>
      <li>Debugging and Optimization of ReactJS Web Applications.</li>
      </ul>`,
    icon: React.createElement(FaReact),
    date: "August, 2022 - December, 2022",
  },
  {
    title: "Full Stack Engineer Trainee Participant",
    location: "Alterra Academy (PT. Marka Kreasi Persada)",
    description: `<p>
      Kemendikbud MSIB Kampus Merdeka Batch 1 in collaboration with Alterra Academy.
      </p>
      <ul>
      <li>Develop backend applications using the Go language and creating REST APIs with the Echo Framework.<br>Develop frontend applications using front‐end libraries React JS, Redux, and the Tailwind CSS Framework.<br></li>
      <li>Implement the usage of SQL &amp; NoSQL DBMS using PostgreSQL and MongoDB.<br></li>
      <li>Gaining an in‐depth understanding of the implementation of CI/CD &amp; Cloud Services.<br></li>
      <li>Acquiring a thorough comprehension of basic problem‐solving skills and implementing them using programming<br>languages and databases.<br></li>
      <li>Collaborating in the Capstone project to build real collaborative projects with other participants.</li>
      </ul>`,
    icon: React.createElement(FaReact),
    date: "August, 2021 - January, 2022",
  },
  {
    title: "Data Entry Staff",
    location: "PT. Gemilang Indonesia Sukses Mulia",
    description: `
      <ul>
      <li>Using online media to search and collect news related to clients<br></li>
      <li>Input the collected news data into the system<br></li>
      <li>Curate all client‐related news based on predetermined keywords<br></li>
      <li>Monitor and analyze data through media monitoring / social listening platforms</li>
      </ul>
    `,
    icon: React.createElement(CgWorkAlt),
    date: "September, 2018 - March, 2019",
  },
  {
    title: "Store Associate",
    location: "PT. Gramedia Asri Media",
    description: `
      <ul>
      <li>Responsible for providing customers with an excellent buying experience.<br></li>
      <li>Manage the store and ensure products are properly displayed before the store opens.<br></li>
      <li>Perform routine inventory counts and submit reports to the Store Manager.<br></li>
      <li>Upsell to customers through recommendations.<br></li>
      </ul>
    `,
    icon: React.createElement(CgWorkAlt),
    date: "September, 2018 - March, 2019",
  },
] as const;

export const educationsData = [
  {
    title: "Informatics Engineering",
    location: "University of Pamulang - Bachelor's Degree",
    description: `
      <p>
      GPA 3.47
      </p>
      <ul>
      <li>Kemdikbud MSIB Kampus Merdeka Batch‐3 2022 Participant<br></li>
      <li>Kemdikbud MSIB Kampus Merdeka Batch‐1 2021 Participant<br></li>
      <li>University Community Service Program Committee 2022: Seminar on Introduction to Information Technology at Yayasan<br>Intifa Cinta Yatim and Dhuafa Al‐Ikhwaniyah, Tangerang</li>
      </ul>
    `,
    icon: React.createElement(LuGraduationCap),
    date: "September, 2018 - March, 2023",
  },
  {
    title: "React Developer - Professional Academy Kominfo x Techready",
    location: "Kominfo Digitalent Scholarship 2022",
    date: "May, 2022 - September, 2022",
    description: `
      <p>
      Several of the subjects covered during this training program:
      </p>
      <ul>
        <li>Understand the basics of JavaScript programming<br></li>
        <li>Understand advanced concepts of JavaScript programming language OOP, Asynchronous</li>
        <li>programming and using best<br></li>
        <li>practices when working with REST APIs<br></li>
        <li>Understand how to build a website with JavaScript frameworks ReactJS<br></li>
        <li>Able to use client‐side state management Redux/Redux Toolkit<br></li>
        <li>Deploy SPA web‐based applications to Netlify hosting services</li>
      </ul>
    `,
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "UI/UX Designer - Professional Academy Kominfo x Skilvul",
    location: "Kominfo Digitalent Scholarship 2021",
    date: "August, 2021 - October, 2021",
    description: `
      <p>
        Skilvul Virtual Internship in collaboration with Waste4Change.com:<br>
      </p>
      <ul>
          <li>Understand the Fundamentals of UI/UX Design &amp; basic use of Figma<br></li>
          <li>Learn UX Research methodology through Design Thinking process<br></li>
          <li>Learn the fow of making User Flow &amp; Wireframe and realize UI Application Prototype based on UX Research<br></li>
          <li>Understand and simulate the fow of the UX Interview process<br></li>
          <li>Document and create UX/UI Case Study Report and publish it to Medium.com<br></li>
          <li>Present the Design Solution to the mentor and all participants</li>
      </ul>
    `,
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "HTML, CSS, JavaScript - Professional Academy Kominfo x Progate",
    location: "Kominfo Digitalent Scholarship 2021",
    date: "March, 2021 - May, 2021",
    description: `
      <p>
        Several of the subjects covered during this training program:
      </p>
      <ul>
        <li>Learn base front end development technologies.<br></li>
        <li>Learn HTML5, CSS3, and JavaScript.<br></li>
        <li>Learn how to use CSS3 UI Bootstrap Framework.<br></li>
        <li>Building responsive UI and user‐friendly web applications</li>
      </ul>
    `,
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Social Science",
    location: "SMA Daarul Qur'an Islamic Boarding School - High School",
    date: "June, 2012 - July, 2015",
    description: `
      <p>
        Achievements:       
      </p>
      <ul>
        <li><span style="color: var(--body-color); font-size: 16px;">Third rank of eleventh grade at the frst semester on academic year 2013 ‐ 2014</span><br></li>
      </ul> 
    `,
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "Corp Comment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "RMT Dev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const skills = [
  { label: "HTML", icon: FaHtml5 },
  { label: "CSS", icon: DiCss3 },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React.js", icon: FaReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "NPM", icon: FaNpm },
] as const;

export const moderateSkills = [
  { label: "React Native", icon: FaReact },
  { label: "Firebase", icon: SiFirebase },
  { label: "Hasura", icon: SiHasura },
  { label: "Redux", icon: SiRedux },
  { label: "Graphql", icon: SiGraphql },
  { label: "Apollo Client", icon: SiApollographql },
  { label: "Figma", icon: FaFigma },
] as const;

export const beginnerSkills = [
  { label: "HTTP", icon: SiAiohttp },
  { label: "Node.js", icon: FaNodeJs },
  { label: "Bun.sh", icon: SiBun },
  { label: "Golang", icon: TbBrandGolang },
  { label: "PostgreSQL", icon: BiLogoPostgresql },
  { label: "MySQL", icon: DiMysql },
] as const;
