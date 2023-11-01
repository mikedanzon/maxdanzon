import React from "react";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoGoLang,
  BiLogoMongodb,
  BiLogoSass,
} from "react-icons/bi";
import { SiCockroachlabs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Tooltip } from "@material-tailwind/react";

const About = () => {
  return (
    <div
      id="about"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4 max-w-7xl"
    >
      <div className="mb-10 md:mb-20">
        <div className="md:text-4xl text-2xl font-bold text-center text-[--main-color] md:mb-5 mb-2">
          About Me
        </div>
        <div className="text-center text-[--main-fade-color] sm:w-[500px] md:text-base text-xs">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </div>
      </div>
      <div className="text-white md:flex md:gap-20 md:justify-center">
        <div className="w-full md:mb-0 mb-5">
          <div className="text-center md:text-4xl text-2xl font-bold text-[--main-color] md:mb-5 mb-2">
            What I do?
          </div>
          <div className="text-[--main-fade-color] md:text-left text-center md:text-base text-xs">
            I'm a fullstack web developer with 3+ years of experience in web
            development and 8+ years of experience in coding. I love to create
            responsive websites using ReactJS, JavaScript, HTML5, CSS3,
            Bootstrap, and others. I have good coding skills and have done
            multiple projects. Also experience with managing a team as a leader
            of team project, I have good communication, and experience to talk
            to a client.
          </div>
        </div>
        <div className="w-full">
          <div className="text-center md:text-4xl text-2xl font-bold text-[--main-color] mb-5">
            My Skills
          </div>
          <div className="text-[--main-fade-color]">
            <div className="flex md:gap-16 gap-5 justify-center md:mb-3 mb-5">
              <Tooltip
                content="HTML5"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoHtml5
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="CSS3"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoCss3
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="JavaScript"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoJavascript
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="ReactJS"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoReact
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
            </div>
            <div className="flex md:gap-16 gap-5 justify-center md:mb-3 mb-5">
              <Tooltip
                content="SASS"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoSass
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="Tailwind"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoTailwindCss
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="Golang"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoGoLang
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="CockroachDB"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <SiCockroachlabs
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
            </div>
            <div className="flex md:gap-16 gap-5 justify-center md:mb-3 mb-5">
              <Tooltip
                content="MongoDB"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <BiLogoMongodb
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
              <Tooltip
                content="MySQL"
                animate={{
                  mount: { scale: 1, y: -5 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="px-2 py-1 bg-white text-center text-black text-1xl duration-500 ease-out"
              >
                <button>
                  <GrMysql
                    size={40}
                    className="hover:text-[--main-color] hover:scale-150 ease-in duration-100 bg-transparent"
                  />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
