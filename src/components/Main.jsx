import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

function Main() {
  return (
    <div
      id="main"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center relative"
    >
      <div className="m-auto h-full w-full flex flex-col justify-center items-center bg-main-background bg-cover">
        <h1 className="sm:text-5xl text-4xl font-bold text-[--main-color] cursor-default bg-transparent">
          I'm Michael Max
        </h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-[--main-fade-color] cursor-default bg-transparent">
          <TypeAnimation
            sequence={[
              "I'm a Software Engineer",
              500,
              "I'm a Front End Developer",
              500,
              "I'm a Back End Developer",
              500,
              "I'm a Fullstack Developer",
              500,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed={50}
            style={{
              fontSize: "1em",
              display: "inline-block",
              background: "none",
            }}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full text-white bg-transparent">
          <a
            href="https://github.com/mikedanzon"
            className="hover:scale-150 ease-in duration-300 bg-transparent"
            target="_blank"
          >
            <FaGithub size={30} className="bg-transparent" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikedanzon/"
            className="hover:scale-150 ease-in duration-300 bg-transparent"
            target="_blank"
          >
            <FaLinkedin size={30} className="bg-transparent" />
          </a>
          <a
            href="https://instagram.com/mikedanzon"
            className="hover:scale-150 ease-in duration-300 bg-transparent"
            target="_blank"
          >
            <FaInstagram size={30} className="bg-transparent" />
          </a>
        </div>
        <a
          className="mb-16 bg-white p-2 rounded-3xl cursor-pointer absolute bottom-0 opacity-[0.3] hover:opacity-[1] hover:scale-125 ease-in duration-300"
          href="#about"
        >
          <AiOutlineArrowDown
            size={20}
            className="text-black bg-white rounded-xl"
          />
        </a>
      </div>
    </div>
  );
}

export default Main;
