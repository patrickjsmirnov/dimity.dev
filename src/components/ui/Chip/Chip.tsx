import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface ChipProps {
  label: string;
  className?: string;
}

export const Chip: FC<ChipProps> = (props) => {
  const { label, className } = props;

  return (
    <div
      className={twMerge(
        "py-1 px-3 bg-accent1 text-white text-sm rounded-3xl",
        className
      )}
    >
      {label}
    </div>
  );
};
