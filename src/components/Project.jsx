import React from "react";
import mernchatapp from "../assets/project/mernchatapp.png";
import foodapp from "../assets/project/foodapp.png";
import tinyurl from "../assets/project/tinyurl.png";
import tictactoe from "../assets/project/tictactoe.png";
import weatherapp from "../assets/project/weatherapp.png";
import vitube from "../assets/project/vitube.png";

function Project() {
  const projects = [
    {
      id: 1,
      src: mernchatapp,
      title: "MERN Chat App",
    },
    {
      id: 2,
      src: foodapp,
      title: "Food Delivery App",
    },
    {
      id: 3,
      src: tinyurl,
      title: "URL Shortener",
    },
    {
      id: 4,
      src: tictactoe,
      title: "Multiplayer Tictactoe game",
    },
    {
      id: 5,
      src: weatherapp,
      title: "Weather forecasting app",
    },
    {
      id: 6,
      src: vitube,
      title: "Youtube clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="sm:h-screen text-white flex flex-col items-center justify-center gap-10 sm:mx-40 mx-10 sm:my-40"
    >
      <div>
        <p className="text-5xl font-bold px-2 border-b-8 border-purple-500">
          Projects
        </p>
      </div>

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {projects.map(({ id, src, title }) => (
          <div
            key={id}
            className="relative shadow-md shadow-purple-500 rounded-lg"
          >
            <img
              src={src}
              alt={title}
              className="rounded-md hover:scale-105 duration-200"
            />
            <p className="absolute bottom-0 left-0 w-full bg-purple-200 text-sm md:text-xl text-black text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
