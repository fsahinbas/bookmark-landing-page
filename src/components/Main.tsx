import Image from "next/image";
import React from "react";
import Figure from "./Figure";

const Main = () => {
  return (
    <main className="flex flex-col pl-4 lg:flex-row-reverse lg:justify-between">
      <div className="w-full overflow-x-clip flex justify-end">
        <Figure image="/images/illustration-hero.svg" direction="left" />
      </div>
      <div className="px-8 mt-24">
        <h1 className="text-3xl font-medium text-center mb-4">
          A Simple Bookmark Manager
        </h1>
        <p className="text-sm leading-6 text-center text-[var(--dark-blue)] opacity-50 mb-8">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-between items-center lg:justify-start lg:gap-4">
          <button className="bg-[var(--soft-blue)] rounded-md px-4 py-3 text-white text-sm leading-7 font-medium shadow-md border-[1px] border-[var(--soft-blue)] hover:bg-transparent hover:text-[var(--soft-blue)]">
            Get it on Chrome
          </button>
          <button className="bg-[#f7f7f7] rounded-md px-4 py-3 text-[var(--dark-blue)] text-sm leading-7 font-medium shadow-md border-[1px] border-transparent hover:bg-transparent hover:border-[var(--dark-blue)] hover:text-[var(--dark-blue)]">
            Get it on Firefox
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
