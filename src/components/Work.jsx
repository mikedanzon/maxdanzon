import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    yearStart: 2022,
    yearStop: 2023,
    title: "Software Engineer - Canlah",
    duration: "1 year",
    tech: "HTML5 • CSS • React JS • SASS • Go • CockroachDB • MongoDB • GCP • GKE • MySQL",
  },
  {
    yearStart: 2021,
    yearStop: 2023,
    title: "Software Engineer - THISCo",
    duration: "2 years",
    tech: "HTML5 • CSS • Go • CockroachDB • MongoDB • GCP • GKE • MySQL • Mailchimp • Retool • Quickbooks",
  },
  {
    yearStart: 2021,
    yearStop: 2021,
    title: "Software Engineer - Forest AI",
    duration: "1 year",
    tech: "HTML5 • CSS • Odoo • Go • Python • MySQL",
  },
  {
    yearStart: 2016,
    yearStop: 2020,
    title: "Game Developer - Freelance",
    duration: "5 years",
    tech: "HTML5 • CSS • PHP • C++ • MySQL",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4 max-w-7xl"
    >
      <h1 className="md:text-4xl text-2xl font-bold text-center text-[--main-color] mb-5 lg:mb-10">
        Work Experience
      </h1>
      <div className="pt-3 pl-5 md:pl-0">
        {data.map((item, idx) => (
          <WorkItems
            key={idx}
            yearStart={item.yearStart}
            yearStop={item.yearStop}
            title={item.title}
            duration={item.duration}
            tech={item.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
