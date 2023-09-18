import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";

import { Link } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeProvider";

import Gallery from "../../../components/Gallery";

// Profile
import Profile from "../../../utils/profile/profile_2D.png";

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
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      {isPortrait ? (
        <div>
          <section>
            <div className="mx-auto my-20">
              <img
                src={Profile}
                alt="animated profile"
                width={500}
                className="h-[62vh] rounded-full mx-auto"
              />
              <div className="text-center text-[var(--color-text)] my-10">
                <p className="text-5xl animation-delay-500 animate-slide-in text-[var(--color-text)]">
                  UX Designer
                </p>
                <p className="text-5xl animation-delay-600 animate-slide-in  text-[var(--color-text)] my-6">
                  Software Engineer
                </p>
                <p className="text-5xl animation-delay-700 animate-slide-in  text-[var(--color-text)] my-6">
                  From Canada 🇨🇦
                </p>
                <p className="text-3xl animation-delay-700 animate-slide-in  text-[var(--color-text)]">
                  ** open to full-time opportunities
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="text-center">
              <h1 className="text-5xl text-[var(--color-text)] animation-delay-2500 animate-font-changes mb-7">
                RESPONSIVE UX DESIGN
              </h1>
              <h1 className="text-5xl text-[var(--color-text)] animation-delay-2500 animate-font-changes mb-7">
                &
              </h1>
              <h1 className="text-5xl text-[var(--color-text)] animation-delay-2500 animate-font-changes mb-7">
                FRONT-END DEVELOPMENT
              </h1>
            </div>
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
          </section>
          <section>
            <h1 className="main-heading text-center pt-5">UX Design</h1>
            <div>
              <p className="body-text w-[67vw] mx-auto my-10">
                John Jang is a UX Designer who brings the idea of various web
                applications to the reality in digital era. He brings
                intuitiveness and simplicity to his designs, helping users to
                feel easy to follow. He is an enthusiastic and passionate
                designer who always contributes ideas and helps to bring better
                designs.
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
          <section>
            <h1 className="main-heading text-center px-12 pt-20">
              Front End Development
            </h1>
            <p className="body-text w-[67vw] mx-auto my-10">
              John Jang is a self-taught developer in web and Front-End
              Development. He has learnt a few tools related to Front End such
              as HTML5, CSS3, JavaScript, React.js etc and has created a few
              mini projects such as to do list, newspaper application that uses
              RESTful API, simple web-based game, etc. Presently, he is working
              on creating a clone version of YouTube. He strives hard to build
              online products that help businesses, charities, etc.
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
          <section className="mb-[-70px] mt-5">
            <Contact />
          </section>
        </div>
      ) : (
        <div>
          <section>
            <div className="flex gap-2">
              <img
                src={Profile}
                alt="animated profile"
                width={400}
                height={200}
                className="mx-auto rounded-full"
              />
              <div className="text-left text-[var(--color-text)] mx-auto my-10">
                <p className="text-5xl animation-delay-500 animate-slide-in text-[var(--color-text)]">
                  UX Designer
                </p>
                <p className="text-5xl animation-delay-600 animate-slide-in  text-[var(--color-text)] my-6">
                  Software Engineer
                </p>
                <p className="text-5xl animation-delay-700 animate-slide-in  text-[var(--color-text)] my-6">
                  From Canada 🇨🇦
                </p>
                <p className="text-3xl animation-delay-700 animate-slide-in  text-[var(--color-text)]">
                  ** open to full-time opportunities
                </p>
              </div>
            </div>
          </section>
          <section>
            <h1 className="text-5xl text-[var(--color-text)] animation-delay-2500 animate-font-changes mb-7">
              RESPONSIVE UX DESIGN & FRONT-END DEVELOPMENT
            </h1>
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
          </section>
          <section>
            <h1 className="main-heading text-center">UX Design</h1>
            <div>
              <p className="body-text w-[67vw] mx-auto my-[50px]">
                John Jang is a UX Designer who brings the idea of various web
                applications to the reality in digital era. He brings
                intuitiveness and simplicity to his designs, helping users to
                feel easy to follow. He is an enthusiastic and passionate
                designer who always contributes ideas and helps to bring better
                designs.
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
          <section>
            <h1 className="main-heading text-center px-12 mt-40">
              Front End Development
            </h1>
            <p className="body-text w-[67vw] mx-auto my-[50px]">
              John Jang is a self-taught developer in web and Front-End
              Development. He has learnt a few tools related to Front End such
              as HTML5, CSS3, JavaScript, React.js etc and has created a few
              mini projects such as to do list, newspaper application that uses
              RESTful API, simple web-based game, etc. Presently, he is working
              on creating a clone version of YouTube. He strives hard to build
              online products that help businesses, charities, etc.
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
          <section className="mb-[-70px] mt-5">
            <Contact />
          </section>
        </div>
      )}
      <footer className="text-center items-center justify-center w-screen h-[25vh] bg-[url(utils/design/ending\_background.gif)] bg-no-repeat bg-cover overflow-x-hidden mb-[-50px] ml-[-30px] mr-0">
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
