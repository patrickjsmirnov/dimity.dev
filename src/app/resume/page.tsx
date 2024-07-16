import { Metadata } from "next";

import { JobExperiencesList } from "@/components/JobExperiencesList";
import { JOB_EXPERIENCE } from "@/mock/resume";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center p-4 max-w-[670px] mx-auto">
      <JobExperiencesList jobExperience={JOB_EXPERIENCE} />
    </main>
  );
}
