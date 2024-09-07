"use client";
import Image from "next/image";
import React from "react";
import Figure from "./Figure";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const data = {
    list: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
    panels: [
      {
        image: "/images/illustration-features-tab-1.svg",
        title: "Bookmark in one click",
        content:
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      },
      {
        image: "/images/illustration-features-tab-2.svg",
        title: "Intelligent search",
        content:
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      },
      {
        image: "/images/illustration-features-tab-3.svg",
        title: "Share your bookmarks",
        content:
          "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      },
    ],
  };
  return (
    <div className="mt-10">
      <ul className=" mb-14 lg:w-[730px] lg:grid lg:grid-cols-3 lg:mx-auto">
        {data.list.map((tab, index) => (
          <li
            onClick={() => setActiveTab(index)}
            key={index}
            className={`py-5 text-base text-center text-[var(--dark-blue)] opacity-75 font-medium border-b-[1px] border-[var(--border)/20] ${
              index === 0 ? "border-t-[1px] border-[var(--border)/20]" : ""
            } lg:border-t-0 ${
              index == activeTab
                ? "lg:border-b-[4px] lg:border-[var(--soft-red)] lg:pb-5"
                : ""
            } cursor-pointer`}
          >
            <a
              className={`${
                index == activeTab
                  ? "border-b-[4px] pb-5 border-[var(--soft-red)] lg:border-none"
                  : ""
              } hover:text-[var(--soft-red)]`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="lg:w-[1110px] lg:mx-auto">
        {data.panels.map((panel, index) => (
          <div
            className={`flex flex-col lg:flex-row ${
              index === activeTab ? "" : "hidden"
            }`}
          >
            <div>
              <Figure image={panel.image} direction="right" />
            </div>
            <div className="mt-10 flex flex-col justify-center items-center lg:w-[445px] lg:items-start lg:ml-[125px]">
              <h3 className="text-2xl leading-[52px] font-medium text-center lg:text-left">
                {panel.title}
              </h3>
              <p className="text-base text-center text-[var(--dark-blue)] opacity-50 lg:text-left">
                {panel.content}
              </p>
              <button className="bg-[var(--soft-blue)] rounded-md py-[10px] px-6  shadow-md mt-8">
                <span className="leading-7 text-white text-sm  font-medium">
                  More Info
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
