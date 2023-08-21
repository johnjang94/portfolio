import React from "react";
import Navigation from "../components/Navigation";
import Tools from "../components/Tools";
import { useState } from "react";
import Hobbies from "../components/Hobbies";

export default function About() {
  const [popupActive, setPopupActive] = useState(false);
  const [popupActive1, setPopupActive1] = useState(false);

  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <Navigation />
      <header>
        <h1 className="main-heading my-20 text-center">Hey 👋🏼, it's me</h1>
      </header>
      <section>
        <div className="body-text mx-auto px-10 xl:px-28">
          <p>
            My name is John Jang and I'm a dedicated designer, researcher, and a
            software engineer in improving & advancing the quality of lives of
            others through design and production. I'm constantly learning new
            things every day and always appreciate to meet people who are
            motivated and willing to share their ideas with others.
            <br />
            <br />
            I have recently graduated from a UX bootcamp and have learnt a lot
            of the processes, concepts and theories of UX/UI and product design
            through facilitating or attending workshops. In fact, I carry real
            industry design participation experience as I have finished my
            bootcamp.
            <br />
            <br />
            I then turned myself into the world of computer technology, where I
            am self-taught and have become capable of building different
            applications. Presently, I can launch a static website or an
            interactive website, web apps with animations, etc.
            <br />
            Last but not lease, I am very much a big-picture thinker and enjoy
            working on products end to end, from ideation all the way to
            development.
          </p>
        </div>
      </section>
      <img
        src={require("../utils/profile/picture.jpeg")}
        alt="My Real Profile"
        width={450}
        className="mx-auto rounded-xl my-10"
      />
      <section>
        <img
          src={require("../utils/about/more-info.png")}
          alt="More Information"
          className="w-[90vw] xl:mt-[5px] xl:mx-10"
        />
        <div className="bg-[beige] xl:mt-[-65px] xl:mx-[75px] xl:h-[120vh] md:h-[130vh] md:mt-[-40px] mx-2 mt-[-15px]">
          <div className="py-5">
            <h1 className="text-4xl px-5 text-center py-5 xl:pt-10">
              My Values
            </h1>
            <h3 className="text-xl font-semibold mx-auto my-3 px-10 xl:px-28">
              📖 Always learning
            </h3>
            <p className="text-xl mx-auto px-10 xl:px-28">
              We humans always advance and reach for the stars. We dream big and
              strive our best to the goals we have.
              <br />
              I always look for the ways to challenge myself, seek for
              knowledge, and ways to improve myself for the better of me.
              <br />
              In my spare time, I read books and take my time to practice design
              and coding besides working out.
            </p>
            <h3 className="text-xl font-semibold mx-auto my-3 px-10 xl:px-28">
              🔥 Be Passionate and enjoy what you do
            </h3>
            <p className="text-xl mx-auto px-10 xl:px-28">
              It causes tremendous amount of stress and will destroy your
              self-esteem if you do something that you do not enjoy nor that you
              are passionate about.
              <br />
              We humans seek for the value of the work that we do. I'm fortunate
              to have met some inspiring and motivating people who enjoy what
              they do in the past and so on today.
              <br />I am definitely looking forward to meet more people who
              carry such great energy. We only have so much time on this earth
              to live - so why waste it?
            </p>
            <h3 className="text-xl font-semibold mx-auto my-3 px-10 xl:px-28">
              🙏🏻 Respect is the KEY
            </h3>
            <p className="text-xl mx-auto px-10 xl:px-28">
              To all the humans out there, we all carry two factors in common:
              time and death.
              <br />
              Although we are all born at different times and live different
              lives, we can only live in the time-frame of 24 hours and no one
              knows when someone will die.
              <br />
              <br />
              Therefore...
              <br />
              a - take every minute as your precious time <br />
              b - be respectful to others as you want to be respected <br />c -
              live your life to see what you can do for others.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img
            src={require("../utils/about/more-info.png")}
            alt="More Information"
            className="w-[90vw] xl:w-[90vw]  md:w-[100vw] mt-[-15px] xl:mt-[-50px] md:mt-[-35px] xl:mx-[40px]"
          />
          <p className="text-5xl text-white xl:main-heading w-[80vw] text-center xl:mx-[85px] md:mx-[60px] mx-[20px] mb-12">
            MORE ABOUT ME
          </p>
          <div class="flex flex-wrap w-[80vw] mx-auto xl:flex-nowrap md:flex-nowrap">
            <button
              onClick={() => setPopupActive(true)}
              className="rounded-[15px] border-solid border-[1px] border-[lightgrey] mr-[30px] hover:shadow-[0px_7px_38px_10px_rgba(145,145,145,0.82)]"
            >
              <img
                src={require("../utils/about/my-tools.png")}
                alt="My tools"
                className="rounded-[15px]"
              />
            </button>
            {popupActive && (
              <Tools
                popupActive={popupActive}
                setPopupActive={setPopupActive}
              />
            )}
            <button
              onClick={() => setPopupActive1(true)}
              className="rounded-[15px] border-solid border-[1px] border-[lightgrey] xl:mr-[-10px] mt-5 xl:mt-0 h-17 hover:shadow-[0px_7px_38px_10px_rgba(145,145,145,0.82)]"
            >
              <img
                src={require("../utils/about/my-hobbies.png")}
                alt="My hobbies"
                className="rounded-[15px]"
              />
            </button>
            {popupActive1 && (
              <Hobbies
                popupActive1={popupActive1}
                setPopupActive1={setPopupActive1}
              />
            )}
          </div>
        </div>
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
