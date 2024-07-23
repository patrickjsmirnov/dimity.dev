import { FC, PropsWithChildren } from "react";

interface Props {
  achievement: string;
}

export const JobAchievementsListItem: FC<Props> = (props) => {
  const { achievement } = props;

  return <li>{achievement}</li>;
};
