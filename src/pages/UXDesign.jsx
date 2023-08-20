import React from "react";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function UXDesign() {
  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="main-heading mt-[20px] px-5 md:px-14 lg:px-24 xl:px-14">
          UX Design
        </h1>
        <div>
          <ProjectCard
            tag="Most Recent"
            image={require("../utils/design/tugo/coverimage.jpeg")}
            name="TuGo Travel Insurance Redesign"
            date="09.2022 ~ 11.2022"
            description={[
              "<< self-initiated >>",
              <br />,
              "Many customers have experienced difficulties in…",
              <br />,
              <br />,
              <li>
                learning about what insurance services are being provided by the
                company
              </li>,
              <li>
                reaching out to the customer service for any type of emergency
                inquiries
              </li>,
              <br />,
              "In this design...",
              <br />,
              <br />,
              <li>
                the customers to find information about services conveniently,
                easily, and quickly
              </li>,
              <li>
                the customers to be able to reach out to the customer service at
                the tip of their fingertips.
              </li>,
              <br />,
              <br />,
              "< Used Tool >",
              <li>Figma</li>,
            ]}
          />
          <div className="w-[307px] cursor-pointer xl:mt-[50px] mt-5 text-center mx-auto xl:float-right mb-[-100px]">
            <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
              <a href="https://johnjang94.github.io/tugo/">
                <p>LEARN MORE 👉</p>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <br />
        </div>
        <div>
          <ProjectCard
            image={require("../utils/design/televu/televu_suite.png")}
            name="TeleVU Suite Portal"
            date="06.2022 ~ 08.2022"
            description={[
              "My design team and I have re-designed an old communication system for clinicians, so that they encounter less technical difficulties when....",
              <br />,
              <br />,
              <li>
                they need to connect themselves to other clinicians remotely
              </li>,
              <li>
                they need to connect to patients for any type of consultation
              </li>,
              <br />,
              "In this design...",
              <br />,
              <br />,
              <li>
                navigation bar, profile settings, web page architecture for each
                page from the menu are re-structured
              </li>,
              <li>
                the experience is re-imagined based on the most frequently used
                features from the old product
              </li>,
              <li>
                the new design has followed the cutting-edge industry standard
              </li>,
            ]}
            className="justify-center"
          />
          <div className="w-[307px] cursor-pointer xl:mt-[50px] mt-5 text-center mx-auto xl:float-right mb-[-100px]">
            <div className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
              <a href="https://johnjang94.github.io/televu/index.html">
                <p>LEARN MORE 👉</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
