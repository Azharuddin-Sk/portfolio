import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
  ];
  return (
    <div className="flex justify-between items-center sm:mx-14 my-5 text-white">
      <div>
        <h2 className="text-4xl font-signature ml-2">Azharuddin</h2>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-xl">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative px-12 py-4 text-xl rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-orange-500 hover:scale-105 transition-all duration-300 hidden md:block">
        Contact me
        <span className="absolute bg-purple-200 text-black text-sm font-semibold py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 -bottom-2 left-1/2 transform -translate-x-1/2">
          mohdazhar.313@gmail.com
        </span>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
