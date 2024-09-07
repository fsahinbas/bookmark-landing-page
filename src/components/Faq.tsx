import React from "react";
import SectionHeader from "./SectionHeader";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="mt-14 px-8 flex flex-col justify-center items-center lg:w-[540px] lg:mx-auto">
      <SectionHeader
        title="Frequently Asked Questions"
        desc="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />
      <Accordion />
      <button className="bg-[var(--soft-blue)] rounded-md px-6 py-[10px] text-white text-sm leading-7 font-medium shadow-md mt-8">
        More Info
      </button>
    </section>
  );
};

export default Faq;
