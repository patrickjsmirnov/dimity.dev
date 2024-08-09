export interface ResumeJob {
  companyName: string;
  companyDescription: string;
  companyLink: string;
  position: string;
  period: string;
  jobAchievements: string[];
  techStack: string[];
}

export interface ResumeEducation {
  place: string;
  period: string;
  degree: string;
}

export enum PageUrl {
  RESUME = "/resume",
  PORTFOLIO = "/portfolio",
  PORTFOLIO_TEAMATIX = "/portfolio/teamatix",
}
