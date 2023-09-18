import React from "react";
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

export default function DesktopHome() {
  const { darkMode } = useDarkMode();
  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <div>
        <header>
          <Navigation />
        </header>
        <section className="justify-center">
          <div className="flex gap-2 flex-wrap">
            <img
              src={require("../../../utils/profile/profile_2D.png")}
              alt="animated profile"
              className="h-[500px] w-[550px] mx-auto my-0 rounded-full"
            />
            <div className="text-left text-[var(--color-text)] mx-auto my-28">
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
      </div>
      <div className="text-center justify-center items-center mx-0 my-[50px]">
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
      </div>
      <section>
        <h1 className="main-heading text-center">UX Design</h1>
        <div>
          <p className="body-text w-[67vw] mx-auto my-[50px]">
            John Jang is a UX Designer who brings the idea of various web
            applications to the reality in digital era. He brings intuitiveness
            and simplicity to his designs, helping users to feel easy to follow.
            He is an enthusiastic and passionate designer who always contributes
            ideas and helps to bring better designs.
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
          John Jang is a self-taught developer in web and Front-End Development.
          He has learnt a few tools related to Front End such as HTML5, CSS3,
          JavaScript, React.js etc and has created a few mini projects such as
          to do list, newspaper application that uses RESTful API, simple
          web-based game, etc. Presently, he is working on creating a clone
          version of YouTube. He strives hard to build online products that help
          businesses, charities, etc.
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
      <section className="py-10 mt-5 sm:px-44">
        <Contact />
      </section>
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
