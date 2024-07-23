import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ResumeJob } from "@/app/types";
import { ResumeJobsListItem } from "./ResumeJobsListItem";

interface Props {
  resumeJobs: ResumeJob[];
  className?: string;
}

export const ResumeJobsList: FC<Props> = (props) => {
  const { resumeJobs, className } = props;

  return (
    <ul className={twMerge("flex flex-col gap-8", className)}>
      {resumeJobs.map((resumeJob, index) => (
        <ResumeJobsListItem key={index} resumeJob={resumeJob} />
      ))}
    </ul>
  );
};
