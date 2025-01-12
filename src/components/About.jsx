import React from "react";

function About() {
  return (
    <div
      name="about"
      className="sm:h-screen text-white flex flex-col items-center justify-center gap-10 sm:mx-20 mx-10 my-20"
    >
      <div className="relative">
        <h2 className="text-5xl font-bold px-2 border-b-8 border-purple-500">
          About me
        </h2>
      </div>

      <div className="flex gap-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-xl font-medium">
            <p className="animate-slidein opacity-0 [--slidein-delay:500ms] ...">
              As an engineer, I have experience working in both product-based
              and service-based IT companies. I am proficient in front-end
              (React.js) and back-end (Node.js) technologies. I also have
              exposure to AWS, Docker, CI/CD systems (Jenkins) and code
              versioning tools such as Git and Jira. Additionally, I can write
              unit test cases using Jest and Vitest.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:1500ms] ...">
              I have built projects to demonstrate these skills, including a
              chat application and gained knowledge about microservices,
              caching, pub-sub and messaging technologies.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:2500ms] ...">
              What I can do: Translate designs into responsive UI components
              using React. Understand existing architecture and build features
              on top of it. Develop reusable components for future use. Write
              maintainable code by following clean coding guidelines.
              Troubleshoot and debug issues as they are reported. Collaborate
              with project managers, designers and fellow developers. Align with
              Agile principles and adhere to the Sprint methodology.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:3500ms] ...">
              Personal Skills:
            </p>
            <div className="grid gap-4 grid-cols-2 grid-rows-3 animate-slidein opacity-0 [--slidein-delay:3500ms] ...">
              <p>- Creativity</p>
              <p>- Problem Solving</p>
              <p>- Quick Learner</p>
              <p>- Team Player</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
