import { JobExperienceItem } from "@/app/types";

export const JOB_EXPERIENCE: JobExperienceItem[] = [
  {
    companyName: "Material Bank®",
    companyLink: "https://materialbank.com",
    position: "Senior Software Engineer",
    companyDescription:
      "The world’s leading marketplace for materials for architects and designers. Company valued at $2 billion, with over 400 employees.",
    period: "Jul 2022 - May 2024 ",
    jobAchievements: [
      "Built a UIKit based on Radix and Theme UI, documented with Storybook, improving UI consistency and accelerating feature development across multiple projects.",
      "Rewrote legacy code across various parts of the application, enhancing maintainability and reducing the JS bundle size by 10%.",
      "Developed the frontend for an e-commerce web application from scratch using Next.js, React Query, and Theme UI, with dependencies managed within a pnpm monorepo.",
      "Implemented a custom hook for adding items to the cart with optimistic updates and a request queue.",
      "Created a shared typescript types package for client and server, enhancing data consistency and streamlining development.",
      "Developed an ESLint config used across multiple projects, improving code quality and consistency.",
      "Implemented Feature-Sliced Design methodology to enhance code modularity and maintainability.",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Storybook"],
  },
  {
    companyName: "Teamatix",
    companyLink: "https://www.teamatix.io",
    position: "Senior Frontend Developer",
    companyDescription:
      "Teamatix is a cloud-based SaaS platform that optimizes hotel operations and enhances team collaboration.",
    period: "Nov 2020 - Jul 2022",
    jobAchievements: [
      "Built a UIKit based on Ant Design, significantly reducing development time for new features through reusable components.",
      "Developed the frontend (SPA) of Teamatix.io, using React, Redux, WebSockets, and RxJS.",
      "Implemented internationalization using React Intl to enhance accessibility and reach non-English speaking users.",
      "Developed a microservice for a blog module using Node.js, Koa, and MongoDB; utilized Mocha for testing and GitLab CI for continuous integration processes.",
      "Integrated Facebook’s Lexical Framework to enhance text editing capabilities for post and document creation.",
      "Developed a mobile application using React Native, mirroring the functionality of the Teamatix.io SPA to enhance mobile user engagement.",
      "Contributed to the interviewing and onboarding processes for new team members.",
    ],
    techStack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Redux",
      "RxJS",
    ],
  },
  {
    companyName: "Apptica",
    companyLink: "https://apptica.com",
    position: "Frontend Developer",
    period: "Jul 2018 - Nov 2020",
    companyDescription:
      "Apptica is a comprehensive Data Provider, Ad Intelligence & App Analytics Tool that helps mobile business grow by providing access to insights and market analytics.",
    jobAchievements: [
      "Led the entire frontend development of Apptica.com, utilizing React, Redux, Less, Webpack, Node.js, and Express.",
      "Developed an internal web application for company data management and administration using React-Admin, which facilitated user access control and permissions management.",
      "Implemented server-side rendering with Node.js & Express to enhance application performance, user interactivity speeds, and SEO visibility.",
      "Created dynamic charts and visualizations using Chart.js, improving data presentation and user interaction.",
      "Upgraded React from version 15 to 16 and Webpack from version 3 to 4, enabling the use of new features and enhancing maintainability.",
      "Developed email newsletters and landing pages, enhancing user engagement and supporting various marketing initiatives.",
    ],
    techStack: [],
  },
  {
    companyName: "Mygento eCommerce Solutions",
    companyLink: "https://www.mygento.com",
    position: "Frontend Developer",
    period: "Jul 2017 - Jul 2018",
    companyDescription:
      "Mygento is a Magento Business Solution Partner and e-commerce solutions provider.",
    jobAchievements: [
      "Developed the frontend of e-commerce projects from scratch using Magento, focusing on creating responsive and user-friendly interfaces.",
      "Utilized a diverse technology stack including Magento (1 & 2), JavaScript, jQuery, Sass, Node.js, Gulp, and Jekyll to deliver high-quality web applications.",
      "Maintained and updated several e-commerce projects, ensuring their continuous operation and relevance.",
    ],
    techStack: [],
  },
];
