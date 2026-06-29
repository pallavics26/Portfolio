
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiApachekafka,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },

  {
    title: "Programming & Tools",
    skills: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];