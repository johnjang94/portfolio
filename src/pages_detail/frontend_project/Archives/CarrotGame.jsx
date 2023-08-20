import React from "react";
import Carrot from "../../../utils/dev/more/carrotgame.png";

export default function CarrotGame() {
  return (
    <div>
      {/* Leaf International Times */}
      <section className="px-4.5">
        <div className="px-5 pb-5">
          <h1 className="project-heading font-semibold">
            Catch the Carrot game (JavaScript)
          </h1>
          <span className="body-text">(made in) 05.2023</span>
        </div>
        <div className="xl:flex flex-nowrap">
          <img
            src={Carrot}
            width={1000}
            alt="Leaf International Times"
            className="rounded-lg"
          />
          <div className="body-text px-2">
            <p>&#60;&#60; This is a self-initiated project &#62;&#62;</p>
            <p>
              This was another JavaScript-oriented game that I have created.
              <br />
              I thought that my previous game, Guess the Number, could become
              easily boring after a few rounds, so I have decided to create
              another game.
              <br />
              The biggest difference for this project was that, if the previous
              game did not really have much fancy UI, this project has much
              better UI to satisfy and motivate the player.
            </p>
            <br />
            <p>
              Among the list of all the mini projects that I have done in the
              past, I think that this was the toughest JavaScript project that I
              have created.
              <br />
              Even though this project did not necessarily involve RESTful API,
              it involved web API and was good enough to make me think about how
              I am going to build the structure of the game.
              <br />I think that I have learnt to consider UX as a huge part of
              this game, to think that if this game is entertaining enough and
              if everyone would understand how to play without much instruction.
            </p>
          </div>
        </div>
        <div className="body-text xl:px-5">
          <ul className="xl:mt-5">
            &#60;&#60; Main Features &#62;&#62;
            <li>Every player gets 10 seconds to play.</li>
            <li>
              Within the given amount of time, the players need to click all the
              carrots that they see on the screen.
            </li>
            <li>
              The players will be notified how much time they have left ever
              since they started to play.
            </li>
            <li>
              The players are allowed to pause the game and resume from they
              left off.
            </li>
            <li>
              If they click all the carrots on time, they will win; if they do
              not succeed to click all the carrots, they lose.
            </li>
            <li>
              If they click a bug by any chance, they will lose the game
              immediately.
            </li>
          </ul>
          <br />
          <div className="flex">
            <p className="mr-5 font-semibold">Github Link</p>
            <a
              href="https://github.com/johnjang94/carrot"
              className="text-[blue]"
            >
              Mini Carrot Game (Github)
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Game Link</p>
            <a
              href="https://johnjang94.github.io/carrot/"
              className="text-[blue]"
            >
              Mini Carrot Game
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
