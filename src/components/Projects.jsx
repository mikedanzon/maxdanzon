import React from "react";
import ProjectsItems from "./ProjectsItems";
import ProjectImage from "../assets/example.webp";

const Projects = () => {
  return (
    <div
      id="projects"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4 max-w-7xl"
    >
      <div>
        <div className="md:text-4xl text-2xl font-bold text-center text-[--main-color]">
          Projects
        </div>
        <div className="md:text-base text-xs text-center pt-5 pb-10 text-[--main-fade-color]">
          Here are some of my personal / business projects
          <br />
          Feel free to look around! More projects will be updated here
        </div>
      </div>
      <div className="text-white">Coming Soon</div>
      {/* <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems image={ProjectImage} title="Example App" />
        <ProjectsItems image={ProjectImage} title="Example App" />
      </div> */}
    </div>
  );
};

export default Projects;
