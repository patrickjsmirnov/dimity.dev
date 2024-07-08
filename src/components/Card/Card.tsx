import { FC, PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {}

export const Card: FC<CardProps> = (props) => {
  const { children, ...cardProps } = props;

  return <div {...cardProps}>{children}</div>;
};
