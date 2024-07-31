import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { FaDocker } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { GrGraphQl } from "react-icons/gr"
import { SiNextdotjs } from "react-icons/si"
import { SiThreedotjs } from "react-icons/si"
import { IoLogoFirebase } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiRedux } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"

export interface Tecnologie {
  name: string
  icon: any
  alt: string
  color?: string
}

export const MAP_TECONOLOGYES_USES_PROYECTS = {
  spotifyClon: [
    {
      name: "React JS",
      icon: FaReact,
      alt: "React js",
      color: "#387af8",
    },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
      alt: "firebase",
      color: "#eab308",
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      alt: "tailwind css",
      color: "#38bdf8",
    },
    {
      name: "Zustand",
      icon: FaReact,
      alt: "zustand",
      color: "#d8a4db",
    },
  ],
  minecraftClon: [
    {
      name: "React JS",
      icon: FaReact,
      alt: "React js",
      color: "#387af8",
    },
    {
      name: "Javascript",
      icon: IoLogoJavascript,
      alt: "javascript",
      color: "#d5c702",
    },
    {
      name: "Three js",
      icon: SiThreedotjs,
      alt: "three js",
      color: "#fff",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      alt: "html",
      color: "#d52b02",
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      alt: "tailwind css",
      color: "#38bdf8",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      alt: "css",
      color: "#387af8",
    },
  ],
}

export const TECNOLOGIES_LIST: Tecnologie[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    alt: "HTML5",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    alt: "CSS3",
  },
  {
    name: "React JS",
    icon: FaReact,
    alt: "React js",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    alt: "javascript ",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    alt: "typescript ",
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    alt: "Next js",
  },
  {
    name: "MySQL",
    icon: GrMysql,
    alt: "mysql",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    alt: "tailwind css",
  },
  {
    name: "Redux",
    icon: SiRedux,
    alt: "redux",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    alt: "Postgresql",
  },
  {
    name: "GraphQL",
    icon: GrGraphQl,
    alt: "graphql",
  },
  {
    name: "Express JS",
    icon: SiExpress,
    alt: "express js",
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
    alt: "node js",
  },
  {
    name: "Docker",
    icon: FaDocker,
    alt: "docker",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    alt: "git",
  },
]
