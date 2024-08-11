import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { PortfolioProject } from "@/lib";

import { PortfolioProjectsListItem } from "./PortfolioProjectsListItem";

interface Props {
  portfolioProjects: PortfolioProject[];
  className?: string;
}

export const PortfolioProjectsList: FC<Props> = (props) => {
  const { portfolioProjects, className } = props;

  return (
    <ul className={twMerge("flex flex-col w-full gap-16", className)}>
      {portfolioProjects.map((portfolioProject) => (
        <PortfolioProjectsListItem
          key={portfolioProject.name}
          portfolioProject={portfolioProject}
        />
      ))}
    </ul>
  );
};
