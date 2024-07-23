import { FC } from "react";

import { Chip } from "@/components/ui/Chip";

interface Props {
  tech: string;
  className?: string;
}

export const TechStackListItem: FC<Props> = (props) => {
  const { tech, className } = props;

  return (
    <li key={tech} className={className}>
      <Chip label={tech} />
    </li>
  );
};
