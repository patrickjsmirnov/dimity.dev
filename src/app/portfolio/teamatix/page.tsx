import { Metadata } from "next";

import { portfolioProjects } from "@/lib";
import { PortfolioProjectsList } from "@/components/PortfolioProjectsList";
import { PortfolioProjectsListItem } from "@/components/PortfolioProjectsList/PortfolioProjectsListItem";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Portfolio",
  description: "Portfolio",
};

export default function PortfolioTeamatix() {
  return (
    <main className="flex flex-col items-center">
      <PortfolioProjectsListItem portfolioProject={portfolioProjects[0]} />
    </main>
  );
}
