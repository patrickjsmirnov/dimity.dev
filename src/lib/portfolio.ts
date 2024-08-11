export type PortfolioProject = {
  name: string;
  logo: string;
  url: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  images: PortfolioImage[];
  achievements: string[];
};

export type PortfolioImage = {
  src: string;
  width: string;
  height: string;
  thumbnailSrc?: string;
  imageClassName?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Teamatix",
    url: "https://www.teamatix.io",
    role: "Senior Full Stack Developer",
    period: "Nov 2020 - Jul 2022",
    logo: "/teamatix-logo.svg",
    description:
      "Teamatix is a cloud-based SaaS platform that optimizes hotel operations and enhances team collaboration. Used by the branded worldwide managed hotels such as Four Seasons, Holiday Inn, Crowne Plaza, Mercure, Radisson, and Novotel.",
    techStack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "MongoDB",
      "Redux",
      "RxJS",
      "WebSockets",
      "FSD",
      "UI-Kit",
      "Ant Design",
      "GitLab CI",
    ],
    achievements: [
      "Built a UIKit based on Ant Design, significantly reducing development time for new features through reusable components.",
      "Developed the frontend (SPA) of Teamatix.io, using React, Redux, WebSockets, and RxJS.",
      "Implemented internationalization using React Intl to enhance accessibility and reach non-English speaking users.",
      "Developed a microservice for a blog module using Node.js, Koa, and MongoDB; utilized Mocha for testing and GitLab CI for continuous integration processes.",
      "Integrated Facebook’s Lexical Framework to enhance text editing capabilities for post and document creation.",
      "Developed a mobile application using React Native, mirroring the functionality of the Teamatix.io SPA to enhance mobile user engagement.",
      "Contributed to the interviewing and onboarding processes for new team members.",
    ],
    images: [
      {
        src: "/teamatix-1.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-2.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-3.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-4.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-5.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-6.jpg",
        width: "1024",
        height: "576",
      },
      {
        src: "/teamatix-7.png",
        width: "973",
        height: "1093",
      },
    ],
  },
  {
    name: "Apptica",
    url: "https://apptica.com",
    role: "Frontend Developer",
    period: "Jul 2018 - Nov 2020",
    description:
      "Apptica is a comprehensive Data Provider, Ad Intelligence & App Analytics Tool that helps mobile business grow by providing access to insights and market analytics.",
    techStack: [
      "JavaScript",
      "jQuery",
      "Sass",
      "Node.js",
      "Gulp",
      "Jekyll",
      "Magento",
    ],
    images: ["/apptica-1.png", "/apptica-2.png"],
  },
];
