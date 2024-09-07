import Image from "next/image";
import React from "react";

type ExtensionProps = {
  index: number;
  image: string;
  title: string;
  info: string;
};
const Extension = ({ index, image, title, info }: ExtensionProps) => {
  return (
    <div
      className={`w-[280px] h-[370px] rounded-2xl shadow-[0_10px_20px_-5px_rgba(73,93,207,0.21)] p-6 flex flex-col justify-center items-center overflow-x-hidden mb-8 ${
        index === 1 ? "mt-8" : index === 2 ? "mt-16" : "mt-0"
      }`}
    >
      <div className="mb-8">
        <Image src={image} width={100} height={100} alt="Chorome Logo" />
      </div>
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-base text-[var(--dark-blue)] opacity-50 mb-8">
        {info}
      </p>
      <div className="w-[150%] h-[4px] border-b-4 border-dotted border-[var(--soft-blue)] mb-6 opacity-20"></div>
      <button className="bg-[var(--soft-blue)] text-white text-sm leading-7 py-[10px] px-9 rounded-md border-[1px] border-[var(--soft-blue)] hover:text-[var(--soft-blue)] hover:bg-transparent transition-all duration-300">
        Add & Install Extension
      </button>
    </div>
  );
};

export default Extension;
