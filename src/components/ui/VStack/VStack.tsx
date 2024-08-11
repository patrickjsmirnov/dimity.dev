import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface VStackProps extends PropsWithChildren {
  className?: string;
}

export const VStack: FC<VStackProps> = (props) => {
  const { className, children } = props;

  return <div className={twMerge("flex flex-col", className)}>{children}</div>;
};
