import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { JobAchievementsListItem } from "./JobAchievementsListItem";

interface Props {
  achievements: string[];
  className?: string;
}

export const JobAchievementsList: FC<Props> = (props) => {
  const { achievements, className } = props;

  return (
    <ul className={twMerge("list-disc pl-6 flex flex-col gap-2", className)}>
      {achievements.map((achievement, index) => (
        <JobAchievementsListItem key={index} achievement={achievement} />
      ))}
    </ul>
  );
};
