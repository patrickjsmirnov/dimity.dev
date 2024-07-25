import { FC } from "react";

import { ResumeEducation } from "@/app/types";

interface Props {
  education: ResumeEducation;
  className?: string;
}

export const ResumeEducationsListItem: FC<Props> = (props) => {
  const { education, className } = props;

  return (
    <li className={className}>
      <p className="font-semibold">{education.degree}</p>
      <p>
        {education.place} — <span className="italic">{education.period}</span>
      </p>
    </li>
  );
};
