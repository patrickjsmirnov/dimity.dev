import { FC } from "react";

import { ResumeJob } from "@/app/types";

import { JobAchievementsList } from "../JobAchievementsList";
import { TechStackList } from "../TechStackList";

interface Props {
  resumeJob: ResumeJob;
  className?: string;
}

export const ResumeJobsListItem: FC<Props> = (props) => {
  const { resumeJob, className } = props;
  const {
    position,
    companyLink,
    companyName,
    period,
    jobAchievements,
    techStack,
  } = resumeJob;

  return (
    <li className={className}>
      <h2 className="text-2xl font-semibold mb-2">{position}</h2>
      <div className="mb-2">
        <a target="_blank" className="font-semibold" href={companyLink}>
          {companyName}
        </a>{" "}
        — <span className="italic">{period}</span>
      </div>
      <JobAchievementsList achievements={jobAchievements} />
      <TechStackList techStack={techStack} />
    </li>
  );
};
