import React from "react";
import chatGPT from "../assets/project/chatGPT.png";
import ecommerce from "../assets/project/ecommerce.png";
import reactWeather from "../assets/project/reactWeather.png";
import tictactoe from "../assets/project/tictactoe.png";
import tts from "../assets/project/tts.png";
import vitube from "../assets/project/vitube.png";

function Project() {
  const projects = [
    {
      id: 1,
      src: tictactoe,
      title: "Multiplayer Tictactoe game",
    },
    {
      id: 2,
      src: vitube,
      title: "Youtube clone",
    },
    {
      id: 3,
      src: tts,
      title: "Texttospeech converter",
    },
    {
      id: 4,
      src: reactWeather,
      title: "Weather forecasting app",
    },
    {
      id: 5,
      src: ecommerce,
      title: "Ecommerce website",
    },
    {
      id: 6,
      src: chatGPT,
      title: "chatGPT clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="sm:h-screen text-white flex flex-col items-center justify-center gap-10 sm:mx-40 mx-10 my-40"
    >
      <div>
        <p className="text-6xl font-bold px-2 border-b-8 border-purple-500">
          Projects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
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
