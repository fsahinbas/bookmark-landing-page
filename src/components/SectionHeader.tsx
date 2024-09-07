import React from "react";

type SectionHeaderProps = {
  title: string;
  desc: string;
};
const SectionHeader = ({ title, desc }: SectionHeaderProps) => {
  return (
    <div className="lg:w-[540px] lg:mx-auto">
      <h2 className="text-2xl leading-[52px] font-medium text-center">
        {title}
      </h2>
      <p className="text-base leading-6 text-[var(--dark-blue)] opacity-50 text-center mb-8">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
