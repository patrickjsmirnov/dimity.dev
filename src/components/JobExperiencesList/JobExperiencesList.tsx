import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { JobExperienceItem } from "@/app/types";
import { JobExperiencesListItem } from "./JobExperiencesListItem";

interface Props {
  jobExperience: JobExperienceItem[];
  className?: string;
}

export const JobExperiencesList: FC<Props> = (props) => {
  const { jobExperience, className } = props;

  return (
    <ul className={twMerge("flex flex-col gap-8", className)}>
      {jobExperience.map((jobExperienceItem, index) => (
        <JobExperiencesListItem key={index} jobExperience={jobExperienceItem} />
      ))}
    </ul>
  );
};
