import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen flex flex-col items-center justify-center gap-9 text-white"
    >
      <h1 className="sm:w-3/4 text-center text-4xl font-bold md:text-7xl">
        I'm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Azharuddin Shaikh,
        </span>
        <br />
        Frontend Developer
      </h1>
      <p className="sm:w-3/5 mx-5 text-center text-2xl leading-10">
        I'm an engineer passionate about web development, proficient in
        technologies such as HTML, CSS, JavaScript, React.js, Node.js, Git,
        Redux, Bootstrap and Tailwind CSS.
      </p>

      <div className="flex items-center sm:gap-12 gap-2 text-white text-2xl font-medium mt-10">
        <div className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 cursor-pointer hover:border-2 border-white">
          <Link to="portfolio" smooth duration={500}>
            Portfolio
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
