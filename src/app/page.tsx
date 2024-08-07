import Image from "next/image";
import { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { TECH_GROUPS } from "@/mock/common";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Senior Frontend Developer",
  description:
    "I am a dedicated Frontend Engineer with over 7 years of experience in building high-performance web applications",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[678px]">
        <Card>
          <>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <Image
                src="/avatar.png"
                width={180}
                height={180}
                alt="avatar"
                className="md:mr-8 mb-5 md:mb-0"
              />
              <div className="flex flex-col">
                <h1 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-3">
                  Dmitry Smirnov
                </h1>
                <p className="text-center md:text-left text-xl">
                  Senior Frontend Engineer
                </p>
              </div>
            </div>
            <p className="text-center md:text-left">
              Hi! 👋 I am a dedicated Frontend Engineer with over 7 years of
              experience in building high-performance web applications. My
              expertise includes{" "}
              <span className="font-semibold">TypeScript</span>,{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">Node.js</span>, and a variety of
              other modern web technologies. I am open to new opportunities and
              collaborations. Feel free to contact me!
            </p>
          </>
        </Card>
        <a
          className="w-full bg-accent2 text-center py-3 font-bold hover:text-primary hover:bg-accent2-dark rounded-3xl mt-4"
          href="mailto:d.smirnov.inbox@gmail.com"
        >
          Send an email
          <span className="ml-2">✍</span>
        </a>
        {/* <div className="w-full mt-4">
          <p>
            Here are some of the technologies and tools I have experience with:
          </p>
          <ul>
            {TECH_GROUPS.map(([techGroup, techStack]) => (
              <li key={techGroup} className="mb-1">
                <span className="font-semibold">{techGroup}:</span> {techStack}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </main>
  );
}
