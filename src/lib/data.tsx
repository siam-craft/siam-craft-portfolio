import { Facebook, Github } from "lucide-react";

import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
// import LogoPrisma from "/public/images/logos/icon-prisma.svg";
import LogoPrisma2 from "/public/images/logos/icon-prisma-2.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoStrapi from "/public/images/logos/icon-strapi.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";

// import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoKlwebco from "/public/images/klwebco.svg";
import LogoWebdeveloperbd from "/public/images/webdevbd3.svg";

// import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectAtaullah from "/public/images/2.2.png";
// import ProjectWingie from "/public/images/project-wingie.png";
import ProjectNikolaDenisBen from "/public/images/3.png";
import ProjectPrumote from "/public/images/prumote-1.png";

// import AvatarDummy from "/public/images/avatar-dummy.svg";
// import AvatarEugen from "/public/images/avatar-eugen.png";
// import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AlifAvatar from "/public/images/alif-avatar.jpg";
import AnikAvatar from "/public/images/anik-avatar.jpg";
import MirazAvatar from "/public/images/miraz-avatar.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/shahsagarm",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/siam-craft/",
  },
  {
    icon: Facebook,
    url: "https://facebook.com/abdullah.siam.4/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Starpi.io",
    logo: LogoStrapi,
    url: "https://strapi.io/",
  },
  {
    label: "Prisma",
    logo: LogoPrisma2,
    // darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKlwebco,
    logoAlt: "KlwebCO. logo",
    position: "Frontend Developer",
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 5),
    summary: [
      "Collaborated closely with the UI/UX team to develop a visually appealing and user-friendly interface.",
      "Engaged in brainstorming sessions to generate innovative ideas and gathered project requirements for internal initiatives.",
      "Contributed to the development of an internal project named AuthCMS, aimed at helping company developers build websites more efficiently. Implemented AI and email marketing features, resulting in a substantial reduction of development time from several days to just a few hours.",
    ],
  },
  {
    logo: LogoWebdeveloperbd,
    darkModeLogo: LogoWebdeveloperbd,
    logoAlt: "WebdeveloperBD Logo",
    position: "Junior Frontend Developer",
    startDate: new Date(2022, 9),
    endDate: new Date(2023, 0),
    summary: [
      "Successfully worked on an enterprise-level application, gaining valuable experience in large-scale project management.",
      "Developed a learning management platform that catered to 20,000+ medical students, enabling them to learn multiple courses, take exams, and prepare for the FCPS Exam.",
      "Created multiple user dashboard components for drataullah.com using Ant Design and Next.js, ensuring an intuitive and visually appealing interface.",
      "Implemented data retrieval from the Strapi backend and seamlessly integrated it into the frontend, providing users with easy access to and interaction with the data.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Prumote",
    description:
      "An all-in-one digital advertising platform where you can do content creation, media planning, and media buying in one place.",
    url: "https://prumote.com/",
    previewImage: ProjectPrumote,
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Prisma",
      "Redux toolkit",
      "Framer motion",
    ],
  },
  {
    name: "Nicole Dennis-Benn's Portfolio",
    description:
      "Nicole Dennis-Benn is the author of HERE COMES THE SUN (Norton/Liveright, July 2016), a New York Times Notable Book of the Year and a 2017 Lambda Literary Award winner. Pulitzer Prize winning journalist",
    url: "https://www.nicoledennisbenn.com/",
    previewImage: ProjectNikolaDenisBen,
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Prisma",
    ],
  },
  {
    name: "Learning Management Platform",
    description:
      "The Learning Management Platform is a comprehensive and user-friendly system that revolutionizes education. It provides students and educators with a seamless online environment, offering advanced tools and resources for a modern and effective learning experience.",
    url: "https://drataullah.com",
    previewImage: ProjectAtaullah,
    technologies: [
      "React.js",
      "Javascript",
      "Ant Design",
      "Strapi.io",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Miraz Uddin",
    personAvatar: MirazAvatar,
    title: "Senior Engineer - webdeveloperbd",
    testimonial:
      "Siam is exceptionally skilled, diverse, and creative, with an innate talent for problem-solving. His strong work ethic and determination make him a highly hardworking individual. Furthermore, he is always easy to communicate with, which enhances his effectiveness as a team player. As a developer, he excels, and I wholeheartedly recommend him for any frontend developer position.",
  },
  {
    personName: "Alif Bin Hossain",
    personAvatar: AlifAvatar,
    title: "Frontend Developer - KLWebCo.",
    testimonial:
      "In addition to his technical prowess, Siam's ability to find humor in any situation brings a positive energy to the workplace. His collaborative spirit and dedication to achieving results make him an ideal candidate for any frontend developer role. Siam's unique blend of skills and personality makes him a standout developer who can uplift any team and create a dynamic work environment that breeds success.",
  },
  {
    personName: "Sheikh Anik",
    personAvatar: AnikAvatar,
    title: "Backend and DevOps Engineer - KLWebCo.",
    testimonial:
      "Siam is a determined and passionate frontend developer, driven to excel in his craft. His eagerness to learn and grow fuels his constant pursuit of knowledge and improvement. He is a true asset to any team, always striving for excellence and embracing new challenges. I enthusiastically recommend him for any frontend developer role.",
  },
];
