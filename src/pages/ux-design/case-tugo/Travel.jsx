import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Travel({ setTravel }) {
  useEffect(() => {
    if (setTravel) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setTravel]);
  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setTravel(false)}
    >
      <div className="bg-white w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-3xl">
        <button
          className="relative float-right"
          onClick={() => setTravel(false)}
        >
          &#x2715;
        </button>
        <div className="mx-auto md:px-20">
          <h1 className="font-bold text-center text-4xl py-10">
            Re-Imagined Assurance for Trips
          </h1>
          <h3>
            Company Name:{" "}
            <span className="font-semibold">TuGo Travel Insurance</span>
          </h3>
          <ul className="py-5">
            Project Objective(s):
            <li>
              Re-design the website to improve accessibility and convenience
            </li>
          </ul>
          <p>
            <span className="py-2.5">Background Story:</span>
            <br />
            <span className="underline py-2.5">How I approached</span>
            <br />I love traveling and enjoy different activities that are
            uniquely offered from each place that I visit. It's always great to
            visit new places to enjoy the view and learn new things that each
            place offers, but you cannot go anywhere without an assurance of
            protection if any kind of emergency occurs. The entire journey might
            turn out to be a nightmare, otherwise.
          </p>
          <p className="py-2.5">
            I believe that most people usually seek for valuable deals, if they
            cannot find cheaper deals or that they cannot afford expensive
            deals. Renowned brands often charge heavy fees to the potential
            customers regarding their services and it might be a challenge for
            many potential travelers to find good insurance companies that offer
            what they are looking for at a relatively competent prices.
          </p>
          <p className="py-2.5">
            <span className="underline">After Exploration</span>
            <br />
            After surfing around the website for a while, this travel insurance
            company called "TuGo Travel Insurance" came to my attention. They
            offered fair services, but it was very challenging to find out more
            information on pricing. I wanted to reach out to the customer
            service, but this was simply another challenge that I faced.
          </p>
          <p className="py-2.5">
            <span className="underline">Common Complaints</span>
            <br />
            At this point, I was curious to find out if any other potential
            customers had any kind of similar issues. Based on my research, the
            voices were clearly expressing frustration and struggles on the
            navigation throughout the website. On the other hand, it was
            surprising to find out that the quality of customer service was good
            once reached.
          </p>
          <p>
            Basically, I learned that their website did not know how to
            communicate. The company had good service, but their website was not
            reflecting anything positive about this company. Rather, the
            complicated exposure of their website navigation and condensed
            amount of information was creating drawbacks amongst potential
            clients.
          </p>
          <p className="py-2.5">
            As much as I love traveling, I felt that I wanted to help this
            company to shine its true values.
          </p>
          <ul>
            I have decided to...
            <br />
            <li>- recreate the navigation menu</li>
            <li>- improve transition from one webpage to another</li>
            <li>
              - simplify each page to ensure smooth reading and quick
              understanding
            </li>
            <li>
              - clearly distinguish the contact information, so that the
              customers can always take immediate action whenever emergency
              situation occurs
            </li>
          </ul>
        </div>
        <div className="cursor-pointer text-center my-10">
          <button className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
            <Link to="https://johnjang94.github.io/tugo/">
              Check out the Project ➡️
            </Link>
          </button>
          <p className="text-sm text-center px-2">
            you will be re-directed to an external website.
          </p>
        </div>
      </div>
    </div>
  );
}
