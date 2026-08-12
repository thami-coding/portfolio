import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDocker, SiTypescript } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiJunit5 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { TbBrandSupabase } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { SiJest } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPydantic } from "react-icons/si";
import foodDeliveryImg from "./assets/images/food-deliver-homepage.png";
import BookingImg from "./assets/images/book-homepage.png";
import ecommerceImg from "./assets/images/e-commerce.png";
import apartmentsImg from "./assets/images/apartments.png";
import {
  SiAngular,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiVitest,
} from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

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
    framework: <SiFastapi />,
    level: "FastAPI",
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
  // { id: uuidv4(), name: "Selenium", icon: <SiSelenium />, level: "Selenium" },
  { id: uuidv4(), name: "Junit5", icon: <SiJunit5 />, level: "Junit5" },
  // { id: uuidv4(), name: "Cypress", icon: <SiCypress />, level: "Cypress" },
  // { id: uuidv4(), name: "Jmeter", icon: <SiApachejmeter />, level: "Jmeter" },
  // { id: uuidv4(), name: "Cucumber", icon: <SiCucumber />, level: "Cucumber" },
  { id: uuidv4(), name: "jest", icon: <SiJest />, level: "Jest" },
  { id: uuidv4(), name: "viteTests", icon: <SiVitest />, level: "Vite Tests" },
  { id: uuidv4(), name: "xUnit", icon: "X", level: "xUnit" },
];

export const allSkills = { frontend, backend, testing, mobile };
export const projects = [
  {
    id: uuidv4(),
    isLive: true,
    name: "food Ordering",
    desc: "A simple food ordering website",
    img: foodDeliveryImg,
    githubLink: "https://github.com/thami-coding/food-delivery",
    projectLink: "https://food-delivery-ydng-peach.vercel.app",
    features: [
      "Admin dashboard",
      "Real-time order tracking",
      "Rate-limited login",
      "Secure login HTTP-only cookies",
      "Payment gateway integration",
      "Live order status updates",
    ],
    stack: {
      icons: [
        <SiExpress />,
        <SiReact />,
        <SiPostgresql />,
        <TbBrandTypescript />,
      ],
    },
  },
  {
    id: uuidv4(),
    isLive: false,
    name: "Backroom rental",
    desc: "Backroom rental website",
    img: apartmentsImg,
    githubLink: "",
    projectLink: "",
    features: [
      "centralized error handling",
      "logging",
      "website containerized",
      "Authentication & Authorization",
      "Onion architecture",
      "Scalar docs",
      "Railway shut down my deployment",
    ],
    stack: {
      icons: [<SiDotnet />, <TbBrandCSharp />, <SiPostgresql />, <SiDocker />],
    },
  },
  {
    id: uuidv4(),
    isLive: true,
    name: "Spa Booking",
    desc: "A simple Spa booking website",
    img: BookingImg,
    githubLink: "https://github.com/thami-coding/spa-booking",
    projectLink: "https://spa-booking031.netlify.app/",
    features: [
      "Book Appointment",
      "Appointment Management",
      "Online Payment",
      "Admin Dashboard",
      "Authentication & Security",
      "Cancel & Reschedule booking",
    ],
    stack: {
      icons: [
        <FaReact />,
        <SiMongodb />,
        <SiPython />,
        <SiFastapi />,
        <SiPydantic />,
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Ecommerce clothing website",
    desc: "A simple e-commerce clothing website",
    img: ecommerceImg,
    githubLink: "",
    projectLink: "",
    features: [
      "Website is Work In Progress...",
      "Website is under construction!!",
      // "SSR",
      // "Search & Filter products",
      // "Online Payment",
      // "Admin Dashboard",
      // "Authentication & Security",
    ],
    stack: {
      icons: [<RiNextjsFill />, <SiPrisma />, <TbBrandSupabase />],
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
