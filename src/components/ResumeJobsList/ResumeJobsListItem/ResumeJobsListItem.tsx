import { FC } from "react";

import { ResumeJob } from "@/app/types";

import { JobAchievementsList } from "../JobAchievementsList";
import { TechStackList } from "../TechStackList";
import { ExternalLinkIcon } from "@/components/icons";

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
      <div className="flex flex-wrap gap-1 mb-2">
        <a
          target="_blank"
          className="flex items-center gap-1 font-semibold"
          href={companyLink}
        >
          {companyName}
          <ExternalLinkIcon width={18} height={18} />
        </a>{" "}
        — <span className="italic">{period}</span>
      </div>
      <JobAchievementsList achievements={jobAchievements} />
      <TechStackList techStack={techStack} />
    </li>
  );
};
