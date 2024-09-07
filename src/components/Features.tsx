import Image from "next/image";
import React from "react";
import Tabs from "./Tabs";
import SectionHeader from "./SectionHeader";

const Features = () => {
  return (
    <section className="mt-32 px-8">
      <SectionHeader
        title={"Features"}
        desc={
          "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        }
      />
      <Tabs />
    </section>
  );
};

export default Features;
