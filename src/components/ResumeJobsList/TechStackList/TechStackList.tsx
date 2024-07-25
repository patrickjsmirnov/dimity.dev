import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { TechStackListItem } from "./TechStackListItem";

interface Props {
  techStack: string[];
  className?: string;
}

export const TechStackList: FC<Props> = (props) => {
  const { techStack, className } = props;

  return (
    <ul className={twMerge("flex flex-wrap gap-2 py-4", className)}>
      {techStack.map((tech) => (
        <TechStackListItem key={tech} tech={tech} />
      ))}
    </ul>
  );
};
