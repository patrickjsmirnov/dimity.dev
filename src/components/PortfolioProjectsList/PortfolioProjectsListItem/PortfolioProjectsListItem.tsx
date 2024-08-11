import { FC, useMemo } from "react";

import { PortfolioProject } from "@/lib";
import { Chip } from "@/components/ui/Chip";
import { twMerge } from "tailwind-merge";
import { ImagesGallery, GalleryImage } from "@/components/ui/ImagesGallery";
import Image from "next/image";

interface Props {
  portfolioProject: PortfolioProject;
  className?: string;
}

export const PortfolioProjectsListItem: FC<Props> = (props) => {
  const { portfolioProject, className } = props;

  const {
    name,
    url,
    description,
    techStack,
    period,
    role,
    images,
    logo,
    achievements,
  } = portfolioProject;
  const displayTechStack = !!techStack.length;

  const galleryImages = useMemo<GalleryImage[]>(() => {
    return images.map((image) => ({
      ...image,
      className: "w-[300px] cursor-pointer",
    }));
  }, [images]);

  return (
    <li className={twMerge("flex flex-col", className)}>
      <a target="_blank" href={url} className="flex mx-auto mb-4">
        <Image src={logo} alt="logo" width="120" height="50" />
      </a>
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="mb-4">{description}</p>
      <p>Period: {period}</p>
      <p className="mb-4">Role: {role}</p>
      <ul className="flex flex-col gap-3 list-disc pl-6 mb-4">
        {achievements?.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        <ImagesGallery images={galleryImages} />
      </div>
      {displayTechStack && (
        <ul className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <li key={tech}>
              <Chip label={tech} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
