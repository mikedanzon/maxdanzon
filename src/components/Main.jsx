import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 cursor-default">
            I'm Michael Max
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 cursor-default">
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer",
                1500,
                "I'm a Front End Developer",
                1500,
                "I'm a Back End Developer",
                1500,
                "I'm a Fullstack Developer",
                1500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaFacebookF size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaLinkedinIn size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
