import React from "react";
import ProjectsItems from "./ProjectsItems";
import ProjectImage from "../assets/example.webp";

const Projects = () => {
  return (
    <div
      id="projects"
      className="snap-start shrink-0 w-screen h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4"
    >
      <h1 className="text-4xl font-bold text-center text-[--main-color]">
        Projects
      </h1>
      <p className="text-center pt-5 pb-10 text-[--main-fade-color]">
        Here are some of my personal / business projects
        <br />
        Feel free to look around! More projects will be updated here
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems image={ProjectImage} title="Example App" />
        <ProjectsItems image={ProjectImage} title="Example App" />
      </div>
    </div>
  );
};

export default Projects;
