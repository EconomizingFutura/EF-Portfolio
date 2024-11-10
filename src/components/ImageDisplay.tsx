import React from "react";

interface ImageDisplayProps {
  src: string;
  alt: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain max-w-full aspect-[4.93] w-[701px]"
    />
  );
};

export default ImageDisplay;
