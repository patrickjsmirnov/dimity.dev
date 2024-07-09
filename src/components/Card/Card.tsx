import { FC, PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {}

export const Card: FC<CardProps> = (props) => {
  const { children, ...cardProps } = props;

  return (
    <div className="p-6 md:p-12 bg-accent rounded-[40px]" {...cardProps}>
      {children}
    </div>
  );
};
