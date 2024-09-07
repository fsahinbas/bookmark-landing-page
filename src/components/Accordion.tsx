"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [expanded, setExpanded] = useState(0);
  const questions = [
    {
      id: 1,
      title: "What is Bookmark?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
      isExpanded: false,
    },
    {
      id: 2,
      title: "How can I request a new browser?",
      desc: "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: 3,
      title: "Is there a mobile app?",
      desc: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentumurna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      id: 4,
      title: "What about other Chromium browsers?",
      desc: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];
  return (
    <div>
      {questions.map((question) => (
        <>
          <div
            className="flex justify-between items-center mb-4 border-b border-[#242A45/20] pb-3 cursor-pointer faq"
            key={question.id}
            onClick={() => setExpanded(question.id)}
          >
            <h3 className="text-base leading-8 text-[var(--dark-blue)]">
              {question.title}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              className={
                expanded === question.id
                  ? "rotate-180 transition-all duration-100"
                  : "rotate-0"
              }
            >
              <path
                fill="none"
                stroke="#5267DF"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          <p
            className={`${
              expanded === question.id
                ? "h-auto opacity-75 mb-8"
                : "h-0 opacity-0"
            } text-base text-[var(--dark-blue)]  overflow-hidden transition-all duration-300 `}
          >
            {question.desc}
          </p>
        </>
      ))}
    </div>
  );
};
export default Accordion;
