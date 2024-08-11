import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface FlexProps extends PropsWithChildren {
  className?: string;
}

export const Flex: FC<FlexProps> = (props) => {
  const { className, children } = props;

  return <div className={twMerge("flex", className)}>{children}</div>;
};
