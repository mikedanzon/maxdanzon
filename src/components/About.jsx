import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen pt-10 m-auto flex flex-col justify-center items-center md:px-20 px-4"
    >
      <div className="text-4xl font-bold text-center text-[--main-color]">
        About Me
      </div>
      <div className="text-center pt-5 text-[--main-fade-color] sm:w-[500px]">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>
      {/* <div className="pt-10">
        <div>What I do?</div>
        <div>My Skills</div>
      </div> */}
    </div>
  );
};

export default About;
