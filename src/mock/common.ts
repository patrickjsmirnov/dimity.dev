export const TECH_GROUPS_MAP = {
  Languages: ["JavaScript", "TypeScript"],
  "UI Frameworks and Libraries": ["React", "React Native", "Next.js"],
  "UI Libraries and Components": ["MUI", "Radix", "Ant Design"],
  Styling: [
    "CSS",
    "Less",
    "Sass",
    "CSS-in-JS",
    "Tailwind",
    "Styled Components",
  ],
  "State Management": [
    "Redux (RTK, redux-observable)",
    "Zustand",
    "React Query",
  ],
  "Build and Development Tools": ["Vite", "Webpack"],
  "Reactive Programming Libraries": ["RxJS"],
  "Architecture and Design": ["Domain Driven Design", "Feature-Sliced Design"],
  "Testing Tools": ["Storybook", "Playwright", "Jest", "Mocha"],
  Backend: ["Node.js", "Koa", "Express"],
  Databases: ["SQL", "MongoDB"],
  "CI/CD": ["Github Actions", "GitLab CI/CD"],
  Containerization: ["Docker"],
  "Monitoring and Logging": ["Sentry"],
};

export const TECH_GROUPS = Object.entries(TECH_GROUPS_MAP).map(
  ([techGroup, techStack]) => [techGroup, techStack.join(", ")]
);
