import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import reduxImage from "../assets/redux.png";
import node from "../assets/node.png";
import mongoDB from "../assets/mongoDB.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-900",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: reduxImage,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="skills"
      className="sm:h-screen text-white flex flex-col items-center justify-center gap-10 sm:mx-40 mx-10 mt-20"
    >
      <div>
        <p className="text-6xl font-bold px-2 border-b-8 border-purple-500">
          Skills
        </p>
      </div>

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt={title} className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
