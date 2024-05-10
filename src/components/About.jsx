import React from "react";

function About() {
  return (
    <div
      name="about"
      className="sm:h-screen text-white flex flex-col items-center justify-center gap-20 sm:mx-20 mx-5 my-20"
    >
      <div className="relative">
        <h2 className="text-6xl font-bold px-2 border-b-8 border-purple-500">
          About me
        </h2>
      </div>

      <div className="flex gap-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-xl font-medium">
            <p>
              I'm a front-end developer who enjoys turning ideas into elegant
              and functional websites. My journey into web development began
              with a fascination for blending creativity with functionality,
              creating websites that not only look great but also perform well
              across devices.
            </p>
            <p>
              My passion for web development drives me to learn various web
              technologies and build awesome projects. I'm excited to
              collaborate with an esteemed organization and contribute to its
              success and growth.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-12 items-center hover:scale-105 transition-all duration-300">
              <p className="text-xl font-medium min-w-150">HTML & CSS</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex gap-20 items-center hover:scale-105 transition-all duration-300">
              <p className="text-xl font-medium min-w-150">React JS</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
                style={{ width: "70%" }}
              />
            </div>
            <div className="flex gap-14 items-center hover:scale-105 transition-all duration-300">
              <p className="text-xl font-medium min-w-150">JavaScript</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="flex gap-20 items-center hover:scale-105 transition-all duration-300">
              <p className="text-xl font-medium min-w-150">Node JS</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex gap-24 items-center hover:scale-105 transition-all duration-300">
              <p className="text-xl font-medium min-w-150">Redux</p>
              <hr
                className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
