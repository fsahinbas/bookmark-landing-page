import React from "react";
import Extension from "./Extension";
import SectionHeader from "./SectionHeader";

const Download = () => {
  const extensions = [
    {
      image: "/images/logo-chrome.svg",
      title: "Add to Chrome",
      info: "Minimum version 62",
    },
    {
      image: "/images/logo-firefox.svg",
      title: "Add to Firefox",
      info: "Minimum version 55",
    },
    {
      image: "/images/logo-opera.svg",
      title: "Add to Opera",
      info: "Minimum version 46",
    },
  ];
  return (
    <section className="mt-14 px-8 flex flex-col justify-center items-center lg:mt-[149px]">
      <SectionHeader
        title="Download the extension"
        desc="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />
      <div className="lg:flex gap-[34px]">
        {extensions.map((extension, index) => (
          <Extension
            index={index}
            image={extension.image}
            title={extension.title}
            info={extension.info}
          />
        ))}{" "}
      </div>
    </section>
  );
};

export default Download;
