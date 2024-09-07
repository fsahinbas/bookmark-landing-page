import Image from "next/image";
import React from "react";

type FigureProps = {
  image: string;
  direction: string;
};
const Figure = ({ image, direction }: FigureProps) => {
  return (
    <div className="relative h-60 w-full lg:w-[579px] lg:h-[386px]">
      <Image
        src={image}
        alt="hero illustration"
        fill
        className="object-fill absolute z-10 top-0 left-0 max-h-52 lg:max-h-96"
      />
      {direction === "left" && (
        <div className="absolute w-full h-3/4 bg-[var(--soft-blue)] rounded-tl-full rounded-bl-full top-16 left-24 z-5 lg:top-28 lg:left-32"></div>
      )}
      {direction === "right" && (
        <div className="absolute w-full h-3/4 bg-[var(--soft-blue)] rounded-tr-full rounded-br-full top-16 right-24 z-5 lg:right-44 lg:top-40 "></div>
      )}
    </div>
  );
};

export default Figure;
