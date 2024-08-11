"use client";

import { FC } from "react";

import "photoswipe/dist/photoswipe.css";

import { Gallery, GalleryProps, Item } from "react-photoswipe-gallery";

export type GalleryImage = {
  src: string;
  width: string;
  height: string;
  thumbnailSrc?: string;
  className?: string;
};

export interface ImagesGalleryProps extends GalleryProps {
  images: GalleryImage[];
}

export const ImagesGallery: FC<ImagesGalleryProps> = (props) => {
  const { images, ...galleryProps } = props;

  return (
    <Gallery {...galleryProps}>
      {images.map((image) => (
        <Item
          key={image.src}
          original={image.src}
          thumbnail={image.thumbnailSrc ?? image.src}
          width={image.width}
          height={image.height}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={image.src}
              className={image.className}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};
