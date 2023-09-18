import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TV({ setTube }) {
  useEffect(() => {
    if (setTube) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setTube]);
  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setTube(false)}
    >
      <div className="bg-white w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-3xl">
        <button className="relative float-right" onClick={() => setTube(false)}>
          &#x2715;
        </button>
        <div className="mx-auto md:px-20">
          <h1 className="font-bold text-center text-4xl py-10">
            Personalized Videos on Your Hands
          </h1>
          <h3>
            Special Note:{" "}
            <span className="font-semibold">
              This was a self-initialized project
            </span>
          </h3>
          <ul className="py-5">
            Project Objective(s):
            <li>
              create a mock version of YouTube that allows streaming service
              from YouTube.
            </li>
          </ul>
          <p>
            <span className="py-2.5">Background Story:</span>
            <br />
            <span className="underline py-2.5">How I approached</span>
            <br />
            It was a few months after I started to learn JavaScript. Until this
            moment, I have created a few very simple and mini games that are
            web-based. Every small game required a bit of effort to create
            because I needed to think about its functionalities and consider how
            I am going to make them work along with the UI. As I continue my
            journey in learning JavaScript, I have reached learning about the
            use of RESTful API communication.
          </p>
          <p className="py-2.5">
            The concept of RESTful API communication seemed to be easy, until I
            realized that the practice was far away from understanding the
            concept. Indeed, I have struggled a few times to make the project
            work in the way I have intended. I needed to pivot the plan a few
            times because I did not have a clear plan for the data structure nor
            was it organized in a way that can be easily followed. Basically,
            this project gave me a moment to think about refactoring the
            structure (besides the code that I was writing).
          </p>
          <p className="py-2.5">
            Perhaps, this was the motive that I looked for more projects that
            require RESTful API communication skill. I was surfing on the web
            for hours to find good sources because many of the providers were
            mixed between paid, unpaid or under-developed.
          </p>
          <p className="py-2.5">
            <span className="underline">Come to Decision</span>
            <br />
            After surfing around the website for a while, I have decided to go
            with a few well-known websites to see if they offer open-source
            options for developers. From this process, YouTube came under my
            radar, and I thought that it was a good practice to write RESTful
            API communication by creating the mock version of YouTube.
          </p>
          <ul>
            Therefore, I have decided to do the following tasks for this
            project:
            <br />
            <li>- create home page</li>
            <li>- allow users to search for videos</li>
            <li>
              - allow users to view related videos to the searched keywords
            </li>
            <li>
              - allow users to view related videos to the videos they have
              chosen to watch
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:text-right text-center my-10">
          <button className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
            <Link to="https://johnjang94.github.io/tugo/">
              Check out the Project ➡️
            </Link>
          </button>
          <p className="text-sm md:text-right text-center px-2">
            you will be re-directed to an external website.
          </p>
        </div>
      </div>
    </div>
  );
}
