import React from "react";

interface HeroBannerProps {
  imageUrl: string;
  altText: string;
  title: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  altText,
  title,
}) => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <img
        alt={altText}
        className="absolute inset-0 size-full object-cover"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 right-0 p-8 text-white left-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
