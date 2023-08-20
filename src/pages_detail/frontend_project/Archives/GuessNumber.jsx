import React from "react";
import Guess from "../../../utils/dev/more/guess.png";

export default function LeafTimes() {
  return (
    <div className="mt-20">
      {/* Leaf International Times */}
      <section className="px-4.5">
        <div className="px-5 pb-5">
          <h1 className="project-heading font-semibold">
            Guess The Number Game (Web-based)
          </h1>
          <span className="body-text">(made in) 02.2023</span>
        </div>
        <div className="body-text xl:flex flex-nowrap">
          <img
            src={Guess}
            width={1000}
            alt="Leaf International Times"
            className="rounded-lg"
          />
          <div>
            <p>&#60;&#60; This is a self-initiated project &#62;&#62;</p>
            <p>
              When COVID-19 hit, everyone has suffered so much including the
              youths from schools.
              <br />
              The pain that the teachers go through to keep the youngsters
              educated and, at the same time, entertained was such challenge
              that was not spoken enough.
              <br />
              I was once an educator myself as well, and I do remember those
              days that I struggled to come up with a fun game for the kids to
              play because most of the games were in-class oriented and were
              focused on psychological and physical interaction that were to be
              occurred in-person.
              <br />
              This time, I needed new ideas to convert the in-person activities
              to remote-based activities.
              <br />
              <br />
              Then this game, Guess the Number, came across my mind and I
              thought that anyone could play this game wherever they are (as
              long as they have the access to the internet).
            </p>
            <br />
            <p>
              Personally, this was an entertaining experience for me to create a
              simple game using JavaScript.
              <br />
              From this project, I think that I have advanced myself deeper in
              the basics of JavaScript and how to utilize CSS inside JavaScript
              as well.
              <br />I also came to realize that there could be a lot more simple
              games like this mini game that I could bring into the world of
              remote teaching and still keep the students entertained.
            </p>
          </div>
        </div>
        <div className="body-text xl:px-5">
          <ul className="xl:mt-5">
            &#60;&#60; Main Features &#62;&#62;
            <li>Every player gets 5 chances to play.</li>
            <li>
              Every player will be notified whether they need to guess a higher
              number or a lower number.
            </li>
            <li>
              The players will be notified how many chances they have left after
              each try.
            </li>
            <li>
              If the player uses all their chances, the guess button will be
              disabled.
            </li>
            <li>
              The player will be able to reset the game, but it will be a new
              number every time they reset.
            </li>
          </ul>
          <br />
          <div className="flex">
            <p className="mr-5 font-semibold">Github Link</p>
            <a
              href="https://github.com/johnjang94/guess-the-number"
              className="text-[blue]"
            >
              Guess the Number game source code
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Project Link</p>
            <a
              href="https://johnjang94.github.io/guess-the-number/"
              className="text-[blue]"
            >
              Guess the Number game
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Front-End</p>
            <p>JavaScript</p>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Deployment</p>
            <p>Github</p>
          </div>
        </div>
      </section>
    </div>
  );
}
