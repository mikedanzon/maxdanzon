import React from "react";

const ProjectsItems = ({ image, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-black">
      <img src={image} alt="/" className="rounded-xl group-hover:opacity-5" />
      <div className="w-full py-10 text-center hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl pb-4 font-bold text-[--white-text-color] tracking-wider">
          {title}
        </h3>
        <a href="/">
          <p className="mx-20 text-center p-3 rounded-lg bg-white font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItems;
