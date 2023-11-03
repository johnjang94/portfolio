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
import CloneYouTube from "../../../utils/dev/youtube.png";
import Shopping from "../../../utils/dev/shopping.png";
import Blockchain from "../../../utils/dev/kblock.png";
import NewsApp from "../../../utils/dev/news-app.png";

import Contact from "../../Contact";

export default function DesktopHome() {
  // const sectionRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         sectionRef.current.classList.add(".animate-slide-up");
  //       }
  //     });
  //   });
  //   observer.observe(sectionRef.current);
  // }, []);

  const { darkMode } = useDarkMode();
  return (
    <div className="bg-[var(--color-bg-dark)]">
      <header>
        <Navigation />
      </header>
      <section className="flex gap-40 pt-20 pb-10 pl-96 justify-center">
        <img
          src={require("../../../utils/profile/profile-v2.jpeg")}
          alt="animated profile"
          width={250}
          className="h-80 rounded-3xl animate-slide-from-left"
        />
        <p className="text-left text-2xl animation-delay-500 animate-slide-from-right pt-10 pr-20">
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
      <section className="py-20 animate-slide-up">
        <h1 className="main-heading text-center px-12">
          Front End Development
        </h1>
        <p className="body-text w-[67vw] mx-auto py-12">
          I am a Front-End Developer / Web Developer.
          <br />I help designs to breathe in the reality and do my best to offer
          positive user experience as well as consider the accessibility issues
          (where it is applicable) when the users interact with web
          applications. I have been contributing to create complex web
          applications such as blockchain explorer, online shopping mall, etc.
          Some of my main tech tools include Next.js, React, TypeScript,
          JavaScript, etc.
        </p>
        <div>
          <Gallery
            image1={CloneYouTube}
            image2={Shopping}
            image3={Blockchain}
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
          <p className="body-text w-[67vw] mx-auto py-12">
            I am a UX Designer who brings value and conceptual ideas into
            reality.
            <br />I conduct proper research to understand the issues underneath
            and go through repeated-iteration cycle of the design process: from
            low-and-high fidelity sketches to drawing out prototypes for
            interaction purposes. In my UX journey, I have been helping small
            businesses to thrive. Now, I am also open to contribute to
            businesses that are bigger in scale.
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
