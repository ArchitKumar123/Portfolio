import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

export const stats = [
  { label: "Years of Development", value: "2+" },
  { label: "Projects Built", value: "10+" },
  { label: "Problems Solved", value: "100+" },
  { label: "SIH Finalist", value: "2025" },
];

export const highlights = [
  { icon: MapPin, text: "Based in West Bengal, India" },
  { icon: Briefcase, text: "Open to Software Developer Opportunities" },
  { icon: GraduationCap, text: "B.Tech CSE Graduate (2026)" },
  { icon: Code2, text: "SIH 2025 Finalist" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "architraul2004@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=architraul2004%40gmail.com&su=Job%20Opportunity",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8918879140",
    href: "tel:+918918879140",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "West Bengal, India",
    href: "#",
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/ArchitKumar123",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/archit-kumar-raul/",
    label: "LinkedIn",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Web Development Lead",
    company: "CodeNexus, GCETTB",
    period: "2024 - 2025",
    description:
      "Led a team of 6 student developers and developed event registration, leaderboard, and dashboard features for the college coding club platform. Coordinated development, collaboration, and deployment workflows.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    type: "work",
    title: "Front-End Developer Intern",
    company: "CodeNexus, GCETTB",
    period: "Oct 2023 - Dec 2023",
    description:
      "Built responsive web pages using HTML, CSS, JavaScript, and Tailwind CSS. Collaborated with 4 interns to deliver website features and improve usability.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    company:
      "Government College of Engineering and Textile Technology, Berhampore",
    period: "2022 - 2026",
    description:
      "Pursued a Bachelor of Technology in Computer Science and Engineering, developing a foundation in programming, software development, databases, and data structures.",
    technologies: ["Java", "Operating System", "Computer Networks", "Data Structures & Algorithms", "DBMS"],
  },
  {
    type: "education",
    title: "Higher Secondary Education",
    company: "Baita Mahendra Nath High School (H.S.)",
    period: "2022",
    description: "Completed Higher Secondary Education with 89%.",
    technologies: ["Physics", "Chemistry", "Mathematics", "Biology"],
  },
];

export const footerSocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/ArchitKumar123",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/archit-kumar-raul/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=architraul2004%40gmail.com&su=Job%20Opportunity",
    label: "Email",
  },
];

export const projects = [
  {
    title: "Vehiql – AI-Enabled Car Marketplace",
    description:
      "Developed a responsive car marketplace with vehicle listing and search features, Clerk authentication, and database integration using Supabase and Prisma ORM.",
    image: "/images/Vehiql.jpg",
    techStack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk",
      "Supabase",
      "Prisma ORM",
    ],
    demoUrl: "https://vehiql-ai-car-marketplace.vercel.app/",
    githubUrl: "https://github.com/ArchitKumar123/Vehiql",
  },
  {
    title: "Blog-App – Full-Stack Blogging Platform",
    description:
      "Built a full-stack blogging platform with REST APIs for creating, editing, and managing posts, JWT authentication, MongoDB data storage, and Cloudinary image uploads.",
    image: "/images/Blog_App.jpg",
    techStack: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/ArchitKumar123/Blog-App",
  },
  {
    title: "FoodShop – Food Ordering Platform",
    description:
      "Built frontend and backend components for a food ordering platform using the MERN stack, implementing REST API endpoints and database operations for core ordering functionality.",
    image: "/images/FoodShop.jpg",
    techStack: ["React.js", "JavaScrippt", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "",
    githubUrl: "https://github.com/ArchitKumar123/FoodShop",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: Layout },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Terminal },
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Shadcn UI", icon: Layers },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Layers },
      { name: "REST APIs", icon: Cloud },
      { name: "JWT Authentication", icon: Code2 },
      { name: "Clerk Authentication", icon: Smartphone },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "SQL", icon: Database },
      { name: "Supabase", icon: Cloud },
      { name: "Prisma ORM", icon: Database },
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "Python", icon: Terminal },
      { name: "C", icon: Code2 },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Globe },
      { name: "VS Code", icon: Code2 },
      { name: "Vercel", icon: Cloud },
      { name: "Docker", icon: Server },
      { name: "Cloudinary", icon: Smartphone },
      { name: "GitHub Actions", icon: Cpu },
    ],
  },
];
