import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";

import { Link } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeProvider";

// Design Swiper
import TeleVUHistory from "../../../utils/design/televu/history.jpg";
import TeleVUVideo from "../../../utils/design/televu/video.jpg";
import TeleVUDesign from "../../../utils/design/televu/design_guide.png";
import TeleVUPrototype from "../../../utils/design/televu/prototype.jpg";

// Dev Swiper
import CloneYouTube from "../../../utils/dev/youtube.png";
import Shopping from "../../../utils/dev/shopping.png";
import Blockchain from "../../../utils/dev/kblock.png";
import NewsApp from "../../../utils/dev/news-app.png";

import Contact from "../../Contact";

export default function TabletHome() {
  const { darkMode } = useDarkMode();
  const [show, setShow] = useState(false);

  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 650) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      {isPortrait ? (
        <div>
          <section>
            <div className="py-10">
              <img
                src={require("../../../utils/profile/profile-v2.jpeg")}
                alt="animated profile"
                width={250}
                className="h-80 rounded-3xl mx-auto animate-slide-up"
              />
              <div className="w-full text-center">
                <p className="inline-block w-4/5 text-left text-2xl animation-delay-500 animate-slide-up pt-10">
                  Hello,
                  <br />
                  My name is John Jang.
                  <br />I am a{" "}
                  <span className="text-[#00d2ff]">
                    Front-End Developer
                  </span> /{" "}
                  <span className="text-[#00d2ff]">Web Developer</span> and a
                  <span className="text-[#2bca6b] pl-1">UX Designer</span>
                  .
                  <br />
                  <br />I am based in Canada 🇨🇦 <br />
                  and I offer...
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="text-center">
              <h1 className="text-3xl text-[var(--color-text)] animate-font-changes mb-7">
                RESPONSIVE UX DESIGN
              </h1>
              <h1 className="text-3xl text-[var(--color-text)] animate-font-changes mb-7">
                &
              </h1>
              <h1 className="text-3xl text-[var(--color-text)] animate-font-changes mb-7">
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
          <section className="py-10">
            <h1 className="text-3xl text-center">Front End Development</h1>
            <div
              style={{
                maxHeight: "450px",
                overflowY: "scroll",
                transition: "max-height 1s",
                marginTop: "15px",
              }}
            >
              <img
                src={CloneYouTube}
                alt="YouTube clone version"
                width={750}
                className="mb-5 rounded-lg"
              />
              <img
                src={Shopping}
                alt="Online shopping mall application"
                width={750}
                className="mb-5 rounded-lg"
              />
              <img
                src={Blockchain}
                alt="Web-based blockchain explorer"
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

            <div className="w-full text-center">
              <button
                onClick={() => setShow(!show)}
                className="text-[#0078CC] text-center py-5"
              >
                Description
              </button>
              <div
                style={{
                  maxHeight: show ? "580px" : "0",
                  overflowY: "scroll",
                  transition: "max-height 1s",
                }}
              >
                <p className="inline-block w-4/5 text-left pb-5">
                  I am a Front-End Developer / Web Developer.
                  <br />I help designs to breathe in the reality and do my best
                  to offer positive user experience as well as consider the
                  accessibility issues (where it is applicable) when the users
                  interact with web applications. I have been contributing to
                  create complex web applications such as blockchain explorer,
                  online shopping mall, etc. Some of my main tech tools include
                  Next.js, React, TypeScript, JavaScript, etc.
                </p>
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
          <section className="py-10">
            <h1 className="text-3xl text-center">UX Design</h1>
            <div
              style={{
                maxHeight: "700px",
                overflowY: "scroll",
                transition: "max-height 1s",
                marginTop: "15px",
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
            <div className="w-full text-center">
              <button
                onClick={() => setShow(!show)}
                className="text-[#0078CC] text-center py-5"
              >
                Description
              </button>
              <div
                style={{
                  maxHeight: show ? "580px" : "0",
                  overflowY: "scroll",
                  transition: "max-height 1s",
                }}
              >
                <p className="inline-block w-4/5 text-left pb-5">
                  I am a UX Designer who brings value and conceptual ideas into
                  reality.
                  <br />I conduct proper research to understand the issues
                  underneath and go through repeated-iteration cycle of the
                  design process: from low-and-high fidelity sketches to drawing
                  out prototypes for interaction purposes. In my UX journey, I
                  have been helping small businesses to thrive. Now, I am also
                  open to contribute to businesses that are bigger in scale.
                </p>
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
          <section className="mb-[-70px] mt-5">
            <Contact />
          </section>
        </div>
      ) : (
        <div>
          <section>
            <div className="py-20">
              <img
                src={require("../../../utils/profile/profile-v2.jpeg")}
                alt="animated profile"
                width={250}
                className="h-80 rounded-3xl mx-auto"
              />
              <p className="text-left text-2xl animation-delay-500 animate-slide-in pt-10 mx-auto">
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
            <h1 className="main-heading text-center pt-20">
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
                  src={CloneYouTube}
                  alt="YouTube clone version"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={Shopping}
                  alt="Online shopping application"
                  width={750}
                  className="mb-5 rounded-lg"
                />
                <img
                  src={Blockchain}
                  alt="Web-based blockchain application"
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
      )}

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
