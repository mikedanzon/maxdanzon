import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    year: 2020,
    title: "hehe",
    duration: "3 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, earum ut cum, excepturi ducimus pariatur, veritatis dolore eligendi quos odit dolores recusandae voluptates. Animi voluptas corporis quod debitis qui voluptates aliquam deserunt ipsam ducimus doloremque, vero, deleniti commodi ad corrupti suscipit natus nam officiis dolor molestiae doloribus rem dolorem recusandae.",
  },
  {
    year: 2020,
    title: "hehe",
    duration: "3 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, earum ut cum, excepturi ducimus pariatur, veritatis dolore eligendi quos odit dolores recusandae voluptates. Animi voluptas corporis quod debitis qui voluptates aliquam deserunt ipsam ducimus doloremque, vero, deleniti commodi ad corrupti suscipit natus nam officiis dolor molestiae doloribus rem dolorem recusandae.",
  },
  {
    year: 2020,
    title: "hehe",
    duration: "3 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, earum ut cum, excepturi ducimus pariatur, veritatis dolore eligendi quos odit dolores recusandae voluptates. Animi voluptas corporis quod debitis qui voluptates aliquam deserunt ipsam ducimus doloremque, vero, deleniti commodi ad corrupti suscipit natus nam officiis dolor molestiae doloribus rem dolorem recusandae.",
  },
  {
    year: 2020,
    title: "hehe",
    duration: "3 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, earum ut cum, excepturi ducimus pariatur, veritatis dolore eligendi quos odit dolores recusandae voluptates. Animi voluptas corporis quod debitis qui voluptates aliquam deserunt ipsam ducimus doloremque, vero, deleniti commodi ad corrupti suscipit natus nam officiis dolor molestiae doloribus rem dolorem recusandae.",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] min-h-screen m-auto md:px-20 px-4 pt-16"
    >
      <h1 className="text-4xl font-bold text-center text-[--main-color] mb-10">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
