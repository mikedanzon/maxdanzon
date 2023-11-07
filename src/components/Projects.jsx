import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Tooltip } from "@material-tailwind/react";

const slides = [
  {
    tooltip: "Portraiture",
    imageUrl: "https://maxdanzon.com/images/portraiture.png",
    link: "https://github.com/mikedanzon/portraiture-project",
  },
  {
    tooltip: "Canlah *screenshot not available",
    imageUrl:
      "https://media.licdn.com/dms/image/C560BAQGdwGmFTn6z2w/company-logo_200_200/0/1677230501445?e=2147483647&v=beta&t=WIyGNdGqpKpz4i1iOAd4gKf0MWTugbMZKZQ46Nzjg8Q",
    link: "https://www.canlah.com/",
  },
  {
    tooltip: "THISCo *screenshot not available",
    imageUrl:
      "https://media.licdn.com/dms/image/C560BAQFY3sRSe-P54Q/company-logo_200_200/0/1627965628778?e=2147483647&v=beta&t=fk1HhQli6xCUz1Rgr9_opiE6gEGfTTg6JTp-QvSyvks",
    link: "https://thiscotime.com",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      id="projects"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4 max-w-7xl"
    >
      <div className="md:text-4xl text-2xl font-bold text-center text-[--main-color] pb-5">
        Projects
      </div>
      <div className="md:text-base text-xs text-center text-[--main-fade-color] pb-5">
        Here are some of my personal / business projects
        <br />
        Feel free to look around! More projects will be updated here
        <br />
        Click the image to view more information about the project
        <br />
        More projects coming soon!
      </div>
      <div className="lg:h-[500px] h-[400px] w-full relative group">
        <Tooltip
          content={slides[currentIndex].tooltip}
          animate={{
            mount: { scale: 1, y: 50 },
            unmount: { scale: 0, y: 25 },
          }}
          className="px-2 py-1 bg-black text-center text-white text-1xl duration-500 ease-out"
        >
          <a
            href={slides[currentIndex].link}
            className="cursor-help"
            target="_blank"
          >
            <div
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              style={{
                backgroundImage: `url(${slides[currentIndex].imageUrl})`,
              }}
            ></div>
          </a>
        </Tooltip>
        <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/80 p-1 text-white cursor-pointer">
          <BsChevronCompactLeft
            onClick={prevSlide}
            size={22}
            className="bg-transparent"
          />
        </div>
        <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/80 p-1 text-white cursor-pointer">
          <BsChevronCompactRight
            onClick={nextSlide}
            size={22}
            className="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
