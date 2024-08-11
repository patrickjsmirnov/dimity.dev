import { Metadata } from "next";

import { PageUrl, portfolioProjects } from "@/lib";
import { PortfolioProjectsList } from "@/components/PortfolioProjectsList";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Portfolio",
  description: "Portfolio",
};

const projects = [
  {
    name: "Material Bank",
    url: PageUrl.PORTFOLIO_MATERIAL_BANK,
  },
  {
    name: "Teamatix",
    url: PageUrl.PORTFOLIO_TEAMATIX,
  },
  {
    name: "Apptica",
    url: PageUrl.PORTFOLIO_APPTICA,
  },
];

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-col gap-6 text-6xl text-center mt-6">
        {projects.map((project) => (
          <li key={project.name}>
            <Link href={project.url}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
