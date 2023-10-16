import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";

import { Link } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeProvider";

import Gallery from "../../../components/Gallery";

// Design Swiper
import TeleVUHistory from "../../../utils/design/televu/history.jpg";
import TeleVUVideo from "../../../utils/design/televu/video.jpg";
import TeleVUDesign from "../../../utils/design/televu/design_guide.png";
import TeleVUPrototype from "../../../utils/design/televu/prototype.jpg";

// Dev Swiper
import Football from "../../../utils/dev/football.png";
import List from "../../../utils/dev/to-do-list.png";
import Guess from "../../../utils/dev/guess.png";
import NewsApp from "../../../utils/dev/news-app.png";

import Contact from "../../Contact";

export default function TabletHome() {
  const { darkMode } = useDarkMode();
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1150 && window.innerWidth > 700) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [show, setShow] = useState(false);

  return (
    <div className="bg-[var(--color-bg-dark)]">
      <header>
        <Navigation />
      </header>
      {isPortrait ? (
        <div>
          <section className="gap-40 py-10">
            <img
              src={require("../../../utils/profile/profile-v2.jpeg")}
              alt="animated profile"
              width={250}
              className="h-80 rounded-3xl mx-auto animate-slide-from-left"
            />
            <div className="w-full text-center">
              <p className="inline-block w-7/12 text-left text-2xl animation-delay-500 animate-slide-from-right text-[var(--color-text)] pt-10">
                Hello,
                <br />
                My name is John Jang.
                <br />I am a{" "}
                <span className="text-[#00d2ff]">
                  Front-End Developer
                </span> / <span className="text-[#00d2ff]">Web Developer</span>
                <br /> and a <span className="text-[#2bca6b]">UX Designer</span>
                .
                <br />
                <br />
                I offer responsive and accessible design across the screens.
                <br />I am based in Canada 🇨🇦.
              </p>
            </div>
          </section>
          {!darkMode && (
            <img
              src={require("../../../utils/design/responsive_design.gif")}
              alt="Responsive Design Illustration"
              className="block mx-auto my-0"
            />
          )}
          {darkMode && (
            <img
              src={require("../../../utils/design/responsive-design.gif")}
              alt="Responsive Design Illustration"
              className="block mx-auto my-0"
            />
          )}
          <section className="py-20">
            <h1 className="main-heading text-center px-12">
              Front End Development
            </h1>
            <p className="body-text w-[67vw] mx-auto my-10">
              I am a Front-End Developer / Web Developer.
              <br />I help designs to breathe in the reality and do my best to
              offer positive user experience as well as consider the
              accessibility issues (where it is applicable) when the users
              interact with web applications. I have been contributing to create
              complex web applications such as blockchain explorer, online
              shopping mall, etc. Some of my main tech tools include Next.js,
              React, TypeScript, JavaScript, etc.
            </p>
            <div className="pb-5 text-center">
              <button
                onClick={() => setShow(!show)}
                className="text-[#0078CC] text-center pb-5"
              >
                View Gallery
              </button>
              <div
                style={{
                  maxHeight: show ? "580px" : "0",
                  overflowY: "scroll",
                  transition: "max-height 1s",
                }}
              >
                <img
                  src={Football}
                  alt="Static Football Website"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={List}
                  alt="To Do List Web application"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={Guess}
                  alt="Web-based simple Guess the Number game"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={NewsApp}
                  alt="News Application"
                  width={750}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
                <Link to="/frontend">
                  <p>LEARN MORE 👉</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-20">
            <h1 className="main-heading text-center">UX Design</h1>
            <div>
              <p className="body-text w-[67vw] mx-auto my-10">
                I am a UX Designer who brings value and conceptual ideas into
                reality.
                <br />I conduct proper research to understand the issues
                underneath and go through repeated-iteration cycle of the design
                process: from low-and-high fidelity sketches to drawing out
                prototypes for interaction purposes. In my UX journey, I have
                been helping small businesses to thrive. Now, I am also open to
                contribute to businesses that are bigger in scale.
              </p>
            </div>
            <div className="pb-5 text-center">
              <button
                onClick={() => setShow(!show)}
                className="text-[#0078CC] text-center pb-5"
              >
                View Gallery
              </button>
              <div
                style={{
                  maxHeight: show ? "580px" : "0",
                  overflowY: "scroll",
                  transition: "max-height 1s",
                }}
              >
                <img
                  src={TeleVUHistory}
                  alt="TeleVU History"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={TeleVUVideo}
                  alt="TeleVU Video"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={TeleVUDesign}
                  alt="TeleVU Design"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={TeleVUPrototype}
                  alt="TeleVU Prototype"
                  width={750}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
                <Link to="/uxdesign">
                  <p>LEARN MORE 👉</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-10 mt-5">
            <Contact />
          </section>
        </div>
      ) : (
        <div>
          <section className="flex gap-40 py-10 pl-72 justify-center">
            <img
              src={require("../../../utils/profile/profile-v2.jpeg")}
              alt="animated profile"
              width={250}
              className="h-80 rounded-3xl animate-slide-from-left"
            />
            <p className="text-left text-2xl animation-delay-500 animate-slide-from-right text-[var(--color-text)] pt-10">
              Hello,
              <br />
              My name is John Jang.
              <br />I am a{" "}
              <span className="text-[#00d2ff]">Front-End Developer</span> /{" "}
              <span className="text-[#00d2ff]">Web Developer</span>
              <br /> and a <span className="text-[#2bca6b]">UX Designer</span>.
              <br />
              <br />
              I offer responsive and accessible design across the screens.
              <br />I am based in Canada 🇨🇦.
            </p>
          </section>
          {!darkMode && (
            <img
              src={require("../../../utils/design/responsive_design.gif")}
              alt="Responsive Design Illustration"
              className="block mx-auto my-0"
            />
          )}
          {darkMode && (
            <img
              src={require("../../../utils/design/responsive-design.gif")}
              alt="Responsive Design Illustration"
              className="block mx-auto my-0"
            />
          )}
          <section className="py-20">
            <h1 className="main-heading text-center px-12">
              Front End Development
            </h1>
            <p className="body-text w-[67vw] mx-auto my-[50px]">
              I am a Front-End Developer / Web Developer.
              <br />I help designs to breathe in the reality and do my best to
              offer positive user experience as well as consider the
              accessibility issues (where it is applicable) when the users
              interact with web applications. I have been contributing to create
              complex web applications such as blockchain explorer, online
              shopping mall, etc. Some of my main tech tools include Next.js,
              React, TypeScript, JavaScript, etc.
            </p>
            <div>
              <Gallery
                image1={Football}
                image2={List}
                image3={Guess}
                image4={NewsApp}
              />
            </div>
            <div className="text-center">
              <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
                <Link to="/frontend">
                  <p>LEARN MORE 👉</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-20">
            <h1 className="main-heading text-center">UX Design</h1>
            <div>
              <p className="body-text w-[67vw] mx-auto my-[50px]">
                I am a UX Designer who brings value and conceptual ideas into
                reality.
                <br />I conduct proper research to understand the issues
                underneath and go through repeated-iteration cycle of the design
                process: from low-and-high fidelity sketches to drawing out
                prototypes for interaction purposes. In my UX journey, I have
                been helping small businesses to thrive. Now, I am also open to
                contribute to businesses that are bigger in scale.
              </p>
            </div>
            <div>
              <Gallery
                image1={TeleVUHistory}
                image2={TeleVUVideo}
                image3={TeleVUDesign}
                image4={TeleVUPrototype}
              />
            </div>
            <div className="text-center">
              <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
                <Link to="/uxdesign">
                  <p>LEARN MORE 👉</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-10 mt-5">
            <Contact />
          </section>
        </div>
      )}
      <footer className="text-center items-center justify-center w-screen h-[25vh] bg-[url(utils/design/ending\_background.gif)] bg-no-repeat bg-cover overflow-x-hidden mb-[-50px] ml-[-30px] mr-0">
        <div className="text-center justify-center w-[101vw]">
          <p className="text-[white] z-[1000] mx-auto mt-5">John Jang</p>
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
