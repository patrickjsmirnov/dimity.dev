import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface HStackProps extends PropsWithChildren {
  className?: string;
}

export const HStack: FC<HStackProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
};
