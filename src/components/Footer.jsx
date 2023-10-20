import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[200px] m-auto bg-[--main-color] flex flex-col justify-center text-center">
      <p className="text-[--white-text-color]">
        © Copyright 2023 maxdanzon.com All Rights Reserved.
      </p>
      <div className="flex justify-center gap-10 pt-5 text-[--white-text-color]">
        <a href="https://github.com/mikedanzon">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/mikedanzon/">
          <FaLinkedin size={30} />
        </a>
        <a href="https://instagram.com/mikedanzon">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
