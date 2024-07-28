import { Metadata } from "next";

import { ResumeJobsList } from "@/components/ResumeJobsList";
import { RESUME_EDUCATIONS, RESUME_JOBS } from "@/mock/resume";
import { ResumeEducationsList } from "@/components/ResumeEducationsList";

export const metadata: Metadata = {
  title: "Dmitry Smirnov | Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center p-4 max-w-[670px] mx-auto gap-y-8">
      <a
        className="w-full bg-accent2 text-center py-3 font-bold hover:text-primary hover:bg-accent2-dark rounded-3xl mt-4"
        href="https://drive.google.com/file/d/1QL8QTkJKXnPicaBFmpuWUTPSOQCpIqwT/view"
        target="_blank"
      >
        Download
        <span className="ml-2">💾</span>
      </a>
      <ResumeJobsList resumeJobs={RESUME_JOBS} />
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ResumeEducationsList educations={RESUME_EDUCATIONS} />
      </div>
    </main>
  );
}
