import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { HiDocumentReport, HiHome } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { BiArrowToTop } from "react-icons/bi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <HiHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <HiDocumentReport size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoIosMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[35%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="m-2 p-4 cursor-pointer hover:scale-150 ease-in duration-300"
          >
            <HiHome
              size={25}
              className="opacity-50 hover:opacity-100 ease-in duration-300"
            />
          </a>
          <a
            href="#work"
            className="m-2 p-4 cursor-pointer hover:scale-150 ease-in duration-300"
          >
            <MdWorkHistory
              size={25}
              className="opacity-50 hover:opacity-100 ease-in duration-300"
            />
          </a>
          <a
            href="#projects"
            className="m-2 p-4 cursor-pointer hover:scale-150 ease-in duration-300"
          >
            <HiDocumentReport
              size={25}
              className="opacity-50 hover:opacity-100 ease-in duration-300"
            />
          </a>
          <a
            href="#contact"
            className="m-2 p-4 cursor-pointer hover:scale-150 ease-in duration-300"
          >
            <IoIosMail
              size={25}
              className="opacity-50 hover:opacity-100 ease-in duration-300"
            />
          </a>
        </div>
      </div>
      <BiArrowToTop
        size={25}
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-[99] cursor-pointer"
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default Sidenav;
