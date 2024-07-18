import { Metadata } from "next";

import { JobExperiencesList } from "@/components/JobExperiencesList";
import { JOB_EXPERIENCE } from "@/mock/resume";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center p-4 max-w-[670px] mx-auto gap-y-8">
      <JobExperiencesList jobExperience={JOB_EXPERIENCE} />
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div>
          <p className="font-semibold">
            Bachelor’s degree in Applied Mathematics and Computer Science
          </p>
          <p>
            Saint Petersburg State University —{" "}
            <span className="italic">2011 - 2015</span>
          </p>
        </div>
        <div>
          <p className="font-semibold">
            Master’s degree in Applied Mathematics and Computer Science
          </p>
          <p>
            Saint Petersburg State University -{" "}
            <span className="italic">2015 - 2017</span>
          </p>
        </div>
      </div>
    </main>
  );
}
