import React from 'react';
import { Image } from '@nextui-org/react';

export interface GalleryImageProps {
  url: string;
  imageWidth: string;
  imageHeight: string;
  alt: string;
}

export default function GalleryImage({ url, imageWidth, imageHeight, alt }: GalleryImageProps) {
  return <Image isZoomed isBlurred  alt={alt} src={url} classNames={
    {
      img:`w-[500px] h-[500px]`,
    }
  } />;
}
