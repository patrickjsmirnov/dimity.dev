import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ResumeEducationsListItem } from "./ResumeEducationsListItem";
import { ResumeEducation } from "@/app/types";

interface Props {
  educations: ResumeEducation[];
  className?: string;
}

export const ResumeEducationsList: FC<Props> = (props) => {
  const { educations, className } = props;

  return (
    <ul className={twMerge("flex flex-col w-full", className)}>
      {educations.map((education, index) => (
        <ResumeEducationsListItem key={index} education={education} />
      ))}
    </ul>
  );
};
