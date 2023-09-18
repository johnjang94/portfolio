import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import TV from "./youtube/TV";
import Blockchain from "./k-block/Blockchain";

import KDA from "../../utils/dev/k-block.png";
import CloneYouTube from "../../utils/dev/youtube_clone.png";

export default function DeveloperOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blockPopUp, setBlockPopUp] = useState(false);
  const [youtubePopUp, setYouTubePopUp] = useState(false);
  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="main-heading mt-5">Front-End Development</h1>
        <div className="px-32">
          <div className="py-10">
            <div>
              <img
                src={KDA}
                alt="Kadena Blockchain Explorer"
                width={1200}
                className="p-3 rounded-lg bg-[#DFEFF6]"
              />
            </div>
            <div className="pt-10">
              <h2 className=" font-semibold text-2xl">
                Blockchain with New Look
              </h2>
              <h3>Re-design Project for Kadena Blockchain Web Explorer</h3>
              <p className="font-bold py-3">
                Project dates:{" "}
                <span className="text-[#0078CC]">07.2023 ~ 09.2023</span>
              </p>
              <p>
                <span className="font-bold">Summary:</span>
                <br />
                As a group, my colleagues and I built the web application for
                one of the blockchain websites called "K-Block" with the new
                look.
              </p>
              <ul className="py-3">
                <span className="font-bold">Delivered Outcome(s):</span>
                <br />
                We built...
                <li>- the navigation menu</li>
                <li>
                  - different web pages: Home, Transaction, Transaction Detail,
                  Block, Block Detail, etc.
                </li>
              </ul>
              <ul className="py-3">
                <span className="font-bold">Used Tool(s):</span>
                <br />
                <span className="py-3">Languages</span>
                <li>- JavaScript</li>
                <span className="py-3">Framework & Libraries</span>
                <li>- React.js</li>
                <li>- Next.js</li>
                <li>- Tailwind CSS</li>
                <li>- Shadcn UI</li>
                <li>- Radix UI</li>
                <li>- Recharts.js</li>
              </ul>
              <p>
                Deployment: <span className="text-[#0078CC]">Vercel</span>
              </p>
              <p>
                Website:{" "}
                <Link
                  to="https://kblock.vercel.app/"
                  className="text-[#0078CC]"
                >
                  Kadena Blockchain Website
                </Link>
              </p>
              <p>
                Github:{" "}
                <Link
                  to="https://github.com/techfleetworks/k-block-app"
                  className="text-[#0078CC]"
                >
                  Kadena Full Code
                </Link>
              </p>
            </div>
          </div>
          <div className="cursor-pointer text-right">
            {!blockPopUp && (
              <button
                onClick={() => {
                  setBlockPopUp(true);
                }}
                className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
              >
                Read More 📖
              </button>
            )}
          </div>
          <div>{blockPopUp && <Blockchain setBlock={setBlockPopUp} />}</div>
        </div>
        {/* ===================================================================================== */}
        {/* From this point, it's all about TeleVU Suite */}
        <div className="px-32 mt-20">
          <div className="py-10">
            <img
              src={CloneYouTube}
              alt="YouTube Clone"
              width={1200}
              className="p-3 rounded-lg bg-[#DFEFF6]"
            />
            <div className="pt-10">
              <h2 className="font-semibold text-2xl">
                Re-Imagined Streaming on Your Hands
              </h2>
              <h3>YouTube Clone Web Application (self-initiated)</h3>
              <p className="font-bold py-3">
                Project dates:{" "}
                <span className="text-[#0078CC]">currently in progress</span>
              </p>
              <p>
                <span className="font-bold">Summary:</span>
                <br />
                In this self-initiated project, I am using RESTful API
                communication to stream the videos across electronic devices
                that access my clone web. The viewers may be able to watch
                videos that are a) hot trends, b) related to their search
                keywords, c) related to the videos they watch, and d) the detail
                of the videos they are watching.
              </p>
              <ul className="py-3">
                <span className="font-bold">Delivered Outcome(s):</span>
                <br />
                My team and I have re-designed...
                <li>- the navigation menu</li>
                <li>- the profile page</li>
                <li>
                  - each page that is connected to the portal main navigation
                </li>
                <li>
                  - an interactive message or alert for each action or each page
                </li>
                <li>- the video-call session feature</li>
              </ul>
            </div>
            <ul className="py-3">
              <span className="font-bold">Used Tool(s):</span>
              Languages
              <li>- JavaScript</li>
              <br />
              Framework & Libraries
              <li>- React.js</li>
              <li>- Tailwind CSS</li>
            </ul>
            <p>
              Deployment: <span className="text-[#0078CC]">Github Pages</span>
            </p>
            <p>
              Website:{" "}
              <Link to="" className="text-[#0078CC]">
                COMING SOON
              </Link>
            </p>
            <p>
              Github:{" "}
              <Link to="" className="text-[#0078CC]">
                COMING SOON
              </Link>
            </p>
          </div>
          <div className="cursor-pointer text-right">
            {!youtubePopUp && (
              <button
                onClick={() => {
                  setYouTubePopUp(true);
                }}
                className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
              >
                Read More 📖
              </button>
            )}
          </div>
          <div>{youtubePopUp && <TV setTube={setYouTubePopUp} />}</div>
        </div>
      </section>
      <section className="text-center mt-36 text-[var(--color-button-background)">
        <button className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-black after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-white before:border-black before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-black hover:before:w-full">
          <Link to="/frontend/archives">Archives</Link>
        </button>
      </section>
      <footer className="text-center items-center justify-center w-screen h-[25vh] bg-[url(utils/design/ending\_background.gif)] bg-no-repeat bg-cover overflow-x-hidden mb-[-50px] ml-[-30px] mr-0 xl:mt-[50px] md:mt-[50px] mt-[130px] pt-[30px]">
        <div className="text-center justify-center w-[101vw]">
          <p className="text-[white] z-[1000] mx-auto my-0">John Jang</p>
          <p className="text-[white] z-[1000] m-2.5">
            UX Designer | Software Engineer
          </p>
          <p className="text-[white] z-[1000] m-2.5">jscolbe9675@gmail.com</p>
          <p className="text-[aqua] z-[1000] m-2.5">
            Copyright &copy; 2022 John Jang All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}