import React from "react";

const WorkItems = ({ yearStart, yearStop, title, duration, tech }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="md:mb-1 mb-3 lg:mb-5 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="px-2 py-1 font-semibold text-[--white-text-color] bg-[--main-fade-color] rounded-md md:inline-block hidden">
            {yearStart} - {yearStop}
          </span>
          <span className="md:text-lg text-base font-semibold text-[--main-color]">
            {title}
          </span>
          <span className="my-1 md:text-sm text-xs font-normal leading-none text-[--work-text-fade-color]">
            {duration}
          </span>
        </p>
        <p className="my-2 md:text-base text-xs font-formal text-[--main-fade-color]">
          Skills: {tech}
        </p>
      </li>
    </ol>
  );
};

export default WorkItems;
