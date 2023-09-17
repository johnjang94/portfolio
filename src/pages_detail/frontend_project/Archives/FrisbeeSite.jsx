import React from "react";
import Frisbee from "../../../utils/dev/more/frisbee.png";

export default function FrisbeeSite() {
  return (
    <div className="mt-20">
      {/* Leaf International Times */}
      <section className="px-4.5">
        <div className="px-5 pb-5">
          <h1 className="project-heading font-semibold">
            Static Frisbee Website
          </h1>
          <span className="body-text">(made in) 10.2022</span>
        </div>
        <div className="body-text xl:flex flex-nowrap">
          <img
            src={Frisbee}
            width={1000}
            alt="Leaf International Times"
            className="rounded-lg"
          />
          <div className="px-2">
            <p>&#60;&#60; This is a self-initiated project &#62;&#62;</p>
            <ul>
              This is the very first website that I have created while learning
              HTML5 and CSS3.
              <br />
              For this project, I needed to...
              <li>insert pictures in certain sizes and orders</li>
              <li>create tables with different colours</li>
              <li>link different pages</li>
              <li>input necessary information to fill up every webpage</li>
            </ul>
            <br />
            <p>
              I was happy to learn that I could also make a simple website using
              HTML and CSS.
              <br />
              This simple project gave me hope that I could eventually build my
              own portfolio if I keep up. Unfortunately, this website is not
              mobile-responsive because I did not learn how to use bootstrap
              back then.
            </p>
          </div>
        </div>
        <div className="body-text xl:px-5">
          <ul className="xl:mt-5">
            &#60;&#60; Main Features &#62;&#62;
            <li>
              Users can view different information from navigation button: home,
              teams, history, and USA Ultimate
            </li>
          </ul>
          <br />
          <div className="flex">
            <p className="mr-5 font-semibold">Github Link</p>
            <a
              href="https://github.com/johnjang94/ultimate_frisbee"
              className="text-[blue]"
            >
              Ultimate Frisbee source code
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Website Link</p>
            <a
              href="https://johnjang94.github.io/ultimate_frisbee/index.html"
              className="text-[blue]"
            >
              Ultimate Frisbee
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
