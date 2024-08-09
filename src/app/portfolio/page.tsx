import { Metadata } from "next";
import { PageUrl } from "../types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Portfolio",
  description: "Portfolio",
};

const companies = [
  {
    name: "Material Bank",
    link: "#",
  },
  {
    name: "Teamatix",
    link: PageUrl.PORTFOLIO_TEAMATIX,
  },
  {
    name: "Apptica",
    link: "#",
  },
  {
    name: "Mygento",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-col gap-8 text-center pt-16">
        {companies.map((company) => (
          <li key={company.name}>
            <Link className="text-6xl" href={company.link}>
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
