import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen flex flex-col items-center justify-center gap-9 text-white"
    >
      <h1 className="sm:w-3/4 text-center text-4xl font-bold md:text-5xl animate-slidein opacity-0 [--slidein-delay:500ms] ...">
        Hi, I'm{" "}
        <span className="md:text-7xl bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Azharuddin Shaikh
        </span>
        <br />
        <span className="animate-slidein opacity-0 [--slidein-delay:1200ms] ...">
          Fullstack Web Developer
        </span>
      </h1>
      <p className="sm:w-3/5 mx-5 text-center text-2xl leading-10 animate-slidein opacity-0 [--slidein-delay:1800ms] ...">
        I'm an engineer passionate about web development, my tech stack :
        <br />
        <span className="mt-4 animate-slidein opacity-0 [--slidein-delay:2800ms] ...">
          HTML, CSS, JavaScript, React.js, Node.js, Redux, MongoDB, PostgreSQL,
          Git, Bootstrap, Tailwind CSS, AWS, Docker, Jest (Unit testing).
        </span>
      </p>

      <div className="flex items-center sm:gap-12 gap-2 text-white text-2xl font-medium mt-8 animate-slidein opacity-0 [--slidein-delay:3600ms] ...">
        <div className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 cursor-pointer hover:border-2 border-white">
          <Link to="portfolio" smooth duration={500}>
            Projects
          </Link>
        </div>
        <div className="px-12 py-4 rounded-full cursor-pointer border-2 border-white hover:border-purple-600">
          <a
            href="https://github.com/Azharuddin-Sk?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
