import { FaReact } from "react-icons/fa";
import { SiAngular, SiVitest } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCypress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiApachejmeter } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
// import { SiRedis } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiTestinglibrary } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import { SiJest } from "react-icons/si";

// levels :Beginner, Basic, Learning,pre-intermediate, Intermediate, Proficient, Master

export const mobile = [
  {
    id: uuidv4(),
    name: "Jetpack Compose",
    icon: <SiJetpackcompose />,
    level: "Jetpack Compose",
  },
];

export const frontend = [
  { id: uuidv4(), name: "HTML5", icon: <FaHtml5 />, level: "HTML5" },
  { id: uuidv4(), name: "CSS3", icon: <FaCss3 />, level: "CSS" },
  {
    id: uuidv4(),
    name: "Javascript",
    icon: <IoLogoJavascript />,
    level: "Javascript",
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: <SiTypescript />,
    level: "TypeScript",
  },
  { id: uuidv4(), name: "React", icon: <FaReact />, level: "React" },
  { id: uuidv4(), name: "Angular", icon: <SiAngular />, level: "Angular" },
  {
    id: uuidv4(),
    name: "Nextjs",
    icon: <RiNextjsFill />,
    level: "Nextjs",
  },
  { id: uuidv4(), name: "Redux", icon: <SiRedux />, level: "Redux" },
  {
    id: uuidv4(),
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    level: "Tailwind CSS",
  },
  {
    id: uuidv4(),
    name: "React Query",
    icon: <SiReactquery />,
    level: "React Query",
  },

];

export const backend = [
  {
    id: uuidv4(),
    name: "Java + Springboot",
    icon: <FaJava />,
    framework: <SiSpringboot />,
    level: "Spring Boot",
  },
  {
    id: uuidv4(),
    name: "Node + Express",
    icon: <FaNodeJs />,
    framework: <SiExpress />,
    level: "Express",
  },
  {
    id: uuidv4(),
    name: "C# + ASP.NET",
    icon: "C#",
    level: "ASP.NET",
  },
  {
    id: uuidv4(),
    name: "Python",
    icon: <FaPython />,
    level: "Python",
  },
  {
    id: uuidv4(),
    name: "Mongodb",
    icon: <SiMongodb />,
    level: "Mongodb",
  },
  {
    id: uuidv4(),
    name: "Postgresql",
    icon: <BiLogoPostgresql />,
    level: "Postgresql",
  },
  { id: uuidv4(), name: "GraphQl", icon: <GrGraphQl />, level: "GraphQl" },
];

export const testing = [
  { id: uuidv4(), name: "Selenium", icon: <SiSelenium />, level: "Selenium" },
  { id: uuidv4(), name: "Junit5", icon: <SiJunit5 />, level: "Junit5" },
  { id: uuidv4(), name: "Cypress", icon: <SiCypress />, level: "Cypress" },
  { id: uuidv4(), name: "Jmeter", icon: <SiApachejmeter />, level: "Jmeter" },
  { id: uuidv4(), name: "Cucumber", icon: <SiCucumber />, level: "Cucumber" },
  { id: uuidv4(), name: "Cucumber", icon: <SiJest />, level: "Jest" },
  { id: uuidv4(), name: "Cucumber", icon: <SiVitest />, level: "Vite Tests" },
  { id: uuidv4(), name: "Cucumber", icon: "X", level: "xUnit" },
];
export const allSkills = { frontend, backend, testing, mobile };
export const projects = [
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      github: <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      mern: <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: "??",
      "mern stack": <RiNodejsLine />,
    },
  },
];

export const navlinks = [
  {
    id: uuidv4(),
    text: "home",
    icon: <FaHome />,
  },
  {
    id: uuidv4(),
    text: "about",
    icon: <IoIosContact />,
  },
  {
    id: uuidv4(),
    text: "skills",
    icon: <FaTools />,
  },
  {
    id: uuidv4(),
    text: "projects",
    icon: <IoRocket />,
  },
  {
    id: uuidv4(),
    text: "contact",
    icon: <MdEmail />,
  },
];

export const navLinksTexts = [
  { id: uuidv4(), text: "home" },
  { id: uuidv4(), text: "about" },
  { id: uuidv4(), text: "skills" },
  { id: uuidv4(), text: "projects" },
  { id: uuidv4(), text: "contact" },
];
