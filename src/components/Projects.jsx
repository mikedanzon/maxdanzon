import React from "react";
import ProjectsItems from "./ProjectsItems";
import ProjectImage from "../assets/example.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        corrupti eveniet maiores facilis error obcaecati, rerum ex ipsum cumque
        amet molestias soluta tempora itaque, libero laborum sint repudiandae.
        Est, consequatur.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems image={ProjectImage} title="Example App" />
        <ProjectsItems image={ProjectImage} title="Example App" />
        <ProjectsItems image={ProjectImage} title="Example App" />
        <ProjectsItems image={ProjectImage} title="Example App" />
      </div>
    </div>
  );
};

export default Projects;
