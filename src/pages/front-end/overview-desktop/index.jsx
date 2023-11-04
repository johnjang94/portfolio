import React, { useEffect, useState } from "react";
import Navigation from "../../../components/Navigation";
import Blockchain from "../k-block/Blockchain";

import KDA from "../../../utils/dev/kblock.png";
import YouTubeClone from "../../../utils/dev/youtube_clone.png";
import Ruminate from "../../../utils/dev/ruminate.png";

import { SiNextdotjs } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";

import { Link } from "react-router-dom";
import TV from "../youtube/TV";
import Footer from "../../../components/Footer";

export default function DesktopSize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blockPopUp, setBlockPopUp] = useState(false);
  const [youtubePopUp, setYouTubePopUp] = useState(false);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="main-heading pt-5 px-10 text-left">
          Front-End Development
        </h1>
        <div className="px-32">
          <div className="flex justify-between py-10">
            <div className="p-3 rounded-lg bg-[#DFEFF6] h-fit mt-10">
              <img src={Ruminate} alt="Ruminate" width={550} />
            </div>
            <div>
              <div className="pt-10 w-[35vw]">
                <h2 className="font-semibold text-2xl">
                  Bringing Digital In Lowering Poverty
                </h2>
                <h3>Ruminate Web Application</h3>
                <p className="font-bold py-3">
                  Project dates:{" "}
                  <span className="text-[#0078CC]">10.2023 ~ Present</span>
                </p>
                <p>
                  <span className="font-bold">Summary:</span>
                  <br />I am building a web application with a group of
                  Front-End and Back-End Developers while collaborating with a
                  group of UX/UI designers, and a group of Product Strategy
                  Team. Ruminate is a non-profit organization operating in the
                  US that seeks to resolve poverty and provide the access to
                  good quality of food to as many people as possible. The
                  primary customers for this group are usually small business
                  owners who share the similar value in helping the society.
                </p>
                <ul className="py-3">
                  <span className="font-bold">Feature(s):</span>
                  <br />
                  <li>
                    - Registration forms to create new account (for food
                    producers and food evaluators)
                  </li>
                  <li>
                    - Administrator Dashboard to facilitate and maintain
                    activities between the producers and evaluators
                  </li>
                  <li>- Data maintenance using firebase</li>
                </ul>
              </div>
              <div className="py-3">
                <span className="font-bold">Used Tool(s):</span>
                <br />
                <div className="flex items-center text-3xl gap-3 py-3">
                  <span className="text-[#61dbfb]">
                    <BiLogoReact />
                  </span>
                  <span className="text-[#0078CC]">
                    <BiLogoTypescript />
                  </span>
                  <span className="text-[#c2cc00]">
                    <SiVite />
                  </span>
                  <span className="text-[#0078CC]">
                    <SiTailwindcss />
                  </span>
                  <span className="text-[#0078CC]">
                    <BiLogoFirebase />
                  </span>
                </div>
                <div>
                  <p>Deployment:</p>
                  <div className="py-2 text-2xl">
                    <BiLogoNetlify />
                  </div>
                </div>
                <p>
                  Website:{" "}
                  <Link to="" className="text-[#0078CC]">
                    Ruminate (currently under construction)
                  </Link>
                </p>
                <p>
                  Github:{" "}
                  <Link
                    to="https://github.com/johnjang94/project_ruminate/tree/main"
                    className="text-[#0078CC]"
                  >
                    Ruminate Github
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer text-right">
            {!youtubePopUp && (
              <button
                onClick={() => {
                  setYouTubePopUp(true);
                }}
                className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
              >
                COMING UP SOON
              </button>
            )}
            <div>{youtubePopUp && <TV setTube={setYouTubePopUp} />}</div>
          </div>
        </div>
        {/* ===================================================================================== */}
        {/* From this point, it's all about Kadena Blockchain */}
        <div className="px-32">
          <div className="flex justify-between py-10">
            <div className="p-3 rounded-lg bg-[#DFEFF6] h-fit mt-10">
              <img src={KDA} alt="Kadena Blockchain Web Explorer" width={550} />
            </div>
            <div>
              <div className="pt-10 w-[35vw]">
                <h2 className="font-semibold text-2xl">
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
                    - different web pages: Home, Transaction, Transaction
                    Detail, Block, Block Detail, etc.
                  </li>
                </ul>
              </div>
              <div className="py-3">
                <span className="font-bold">Used Tool(s):</span>
                <br />
                <div className="flex items-center text-3xl gap-3 py-3">
                  <span className="text-[#45ce05]">
                    <SiNextdotjs />
                  </span>
                  <span className="text-[#61dbfb]">
                    <BiLogoReact />
                  </span>
                  <span className="text-[#F0DB4F]">
                    <RiJavascriptFill />
                  </span>
                  <span className="text-[#0078CC]">
                    <SiTailwindcss />
                  </span>
                </div>
              </div>
              <div>
                Deployment:
                <div className="py-2 text-2xl">
                  <IoLogoVercel />
                </div>
              </div>
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
        {/* From this point, it's all about YouTube clone project */}
        <div className="px-32">
          <div className="flex justify-between py-10">
            <div className="p-3 rounded-lg bg-[#DFEFF6] h-fit mt-10">
              <img src={YouTubeClone} alt="YouTube Clone coding" width={550} />
            </div>
            <div>
              <div className="pt-10 w-[35vw]">
                <h2 className="font-semibold text-2xl">
                  Re-Imagined Streaming on Your Hands
                </h2>
                <h3>YouTube Clone Web Application (self-initiated)</h3>
                <p className="font-bold py-3">
                  Project dates:{" "}
                  <span className="text-[#0078CC]">08.2023 ~ 09/2023</span>
                </p>
                <p>
                  <span className="font-bold">Summary:</span>
                  <br />
                  In this self-initiated project, I am using RESTful API
                  communication to stream the videos across electronic devices
                  that access my clone web. The viewers may be able to watch
                  videos that are a) hot trends, b) related to their search
                  keywords, c) related to the videos they watch, and d) the
                  detail of the videos they are watching.
                </p>
                <ul className="py-3">
                  <span className="font-bold">Feature(s):</span>
                  <br />
                  <li>- the navigation menu</li>
                  <li>- the profile page</li>
                  <li>- home page (where you see hot trends)</li>
                  <li>- video-detail page</li>
                </ul>
              </div>
              <div className="py-3">
                <span className="font-bold">Used Tool(s):</span>
                <br />
                <div className="flex items-center text-3xl gap-3 py-3">
                  <span className="text-[#61dbfb]">
                    <BiLogoReact />
                  </span>
                  <span className="text-[#F0DB4F]">
                    <RiJavascriptFill />
                  </span>
                  <span className="text-[#0078CC]">
                    <SiTailwindcss />
                  </span>
                </div>
                <div>
                  Deployment:
                  <div className="py-2 text-2xl">
                    <BiLogoNetlify />
                  </div>
                </div>
                <p>
                  Website:{" "}
                  <Link
                    to="https://youtube-myversion.netlify.app/"
                    className="text-[#0078CC]"
                  >
                    YouTube (my clone version)
                  </Link>
                </p>
                <p>
                  Github:{" "}
                  <Link
                    to="https://github.com/johnjang94/cloneYouTube"
                    className="text-[#0078CC]"
                  >
                    YouTube Clone full code
                  </Link>
                </p>
              </div>
            </div>
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
            <div>{youtubePopUp && <TV setTube={setYouTubePopUp} />}</div>
          </div>
        </div>
      </section>
      <section className="text-center py-10 text-[var(--color-button-background)">
        {!youtubePopUp && (
          <button className="block mx-auto z-[1] text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-black after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-white before:border-black before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-black hover:before:w-full">
            <Link to="/frontend/archives">Archives</Link>
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
}
