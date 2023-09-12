import React from "react";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import MoreButton from "../components/MoreButton";
import { Link } from "react-router-dom";
import styles from "../css/Frontend.module.css";

export default function FrontEnd() {
  window.moveTo(0, 0);
  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="main-heading mt-[20px] px-5 md:px-14 lg:px-24 xl:px-14">
          Front End Development
        </h1>
        <div>
          <ProjectCard
            tag="Most Recent"
            image={require("../utils/dev/k-block.png")}
            name="K-Block Bitcoin Web Project"
            date="08.2023 ~ Present"
            description={[
              "This is a real-world team based project that's currently under construction.",
              "Following the reference guide from UX Design Team, colleagues and I are re-building the UI structure of one of the blockchain websites that currently exists.",
              <br />,
              <br />,
              "From this website, we are hoping to help the customers on browsing…",
              <li>the changes of token prices on live</li>,
              <li>the history of transactions from recent to archived</li>,
              <li>the status of the current traffic</li>,
              <br />,
            ]}
          />
          <div className="w-[307px] cursor-pointer xl:mt-[50px] mt-5 text-center mx-auto xl:float-right mb-[-100px]">
            <Link to="/home">
              <MoreButton content="COMING UP SOON" />
            </Link>
          </div>
        </div>
        <div className="mt-[100px]">
          <br />
        </div>
        <div>
          <ProjectCard
            image={require("../utils/dev/youtube_clone.png")}
            name="Clone version of YouTube Web Application"
            date="07.2023 ~ Present"
            description={[
              "This is a self-initiated project.",
              <br />,
              "In this project, I am using RESTful API to practice the communication between web and server. In this project, I am using open API sources from YouTube Developer's open sources.",
              <br />,
              <br />,
              "I am planning to…",
              <br />,
              <br />,
              <li>allow users to toggle between light mode and dark mode</li>,
              <li>
                allow users to click a video and be able to look into detail
              </li>,
              <li>allow users to look for related videos</li>,
            ]}
          />
          <div className="w-[307px] cursor-pointer xl:mt-[50px] mt-5 text-center mx-auto xl:float-right mb-[-100px]">
            <MoreButton content="COMING UP SOON" link="/home" />
          </div>
        </div>
      </section>
      <section className="text-center mt-36 text-[var(--color-button-background)">
        <Link to="/frontend/archives" className={styles.button}>
          <p className="body-text">Archives</p>
        </Link>
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
