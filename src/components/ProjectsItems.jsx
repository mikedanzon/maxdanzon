import React from "react";

const ProjectsItems = ({ image, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[--main-color]">
      <img src={image} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-[--white-text-color] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[--white-text-color] text-center">
          React Js
        </p>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-[--main-color] font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItems;
