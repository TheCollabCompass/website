import React from 'react';
import { Image } from '@nextui-org/react';

export interface GalleryImageProps {
  url: string | undefined;
  imageWidth: string | undefined;
  imageHeight: string | undefined;
  alt: string | undefined;
}

export default function GalleryImage({ url, imageWidth, imageHeight, alt }: GalleryImageProps) {
  return (
    <Image
      isZoomed
      isBlurred
      alt={alt}
      src={url}
      classNames={{
        img: `w-[500px] h-[500px]`,
      }}
    />
  );
}
