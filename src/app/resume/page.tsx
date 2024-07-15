import { Metadata } from "next";

import { JobAchievementsList } from "@/components/JobAchievementsList";

import { TEAMATIX_ACHIEVEMENTS } from "../lib/resume";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center max-w-[670px]">
        <h1>Teamatix</h1>
        <p>Senior Frontend Developer</p>
        <p>Nov 2020 - Jul 2022</p>
        <a href="https://www.teamatix.io">teamatix.io</a>
        <p>
          Teamatix is a cloud-based SaaS platform that optimizes hotel
          operations and enhances team collaboration.
        </p>
        <JobAchievementsList achievements={TEAMATIX_ACHIEVEMENTS} />
      </div>
    </main>
  );
}
