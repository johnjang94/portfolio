import React, { useEffect, useState } from "react";
import Navigation from "../../../components/Navigation";
import ProjectCard from "../../../components/ProjectCard";
import Footer from "../../../components/Footer";
import Travel from "../case-tugo/Travel";
import Televu from "../case-televu/Televu";

import TuGoCover from "../../../utils/design/tugo/cover-image.jpeg";
import TeleVUCover from "../../../utils/design/televu/televu_suite.png";

export default function DesktopSize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tugoPopUp, setTugoPopUp] = useState(false);
  const [televuPopUp, setTelevuPopUp] = useState(false);

  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="main-heading mt-5">UX Design</h1>
        <div className="px-32">
          <div className="flex justify-between py-10">
            <div>
              <ProjectCard
                image={TuGoCover}
                alt="Tugo Travel Insurance Cover"
              />
            </div>
            <div className="pt-10 w-[35vw]">
              <h2 className=" font-semibold text-2xl">
                Worry-Free Trips, We've Got Your Back
              </h2>
              <h3>Re-design Project for Tugo Travel Insurance Company</h3>
              <p className="font-bold py-3">
                Project dates:{" "}
                <span className="text-[#0078CC]">09.2022 ~ 11.2022</span>
              </p>
              <p>
                <span className="font-bold">Summary:</span>
                <br />
                This project was a mission to help a travel insurance company to
                communicate better with potential customers(a.k.a travelers) to
                improve search traffic by re-designing their website.
              </p>
              <ul className="py-3">
                <span className="font-bold">Delivered Outcome(s):</span>
                <br />I have re-designed...
                <li>- the navigation menu</li>
                <li>- the transition from one web page to another</li>
                <li>- each page to improve readability</li>
                <li>- the new look for the contact information</li>
              </ul>
            </div>
          </div>
          <div className="cursor-pointer text-right">
            {!tugoPopUp && (
              <button
                onClick={() => {
                  setTugoPopUp(true);
                }}
                className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
              >
                Read More 📖
              </button>
            )}
          </div>
          <div>{tugoPopUp && <Travel setTravel={setTugoPopUp} />}</div>
        </div>
        {/* ===================================================================================== */}
        {/* From this point, it's all about TeleVU Suite */}
        <div className="px-32">
          <div className="flex justify-between py-10">
            <div className="pt-10 w-[35vw]">
              <h2 className="font-semibold text-2xl">
                Healthcare on Your Hands
              </h2>
              <h3>Re-design Project for TeleVU Innovations Incorporation</h3>
              <p className="font-bold py-3">
                Project dates:{" "}
                <span className="text-[#0078CC]">06.2022 ~ 08.2022</span>
              </p>
              <p>
                <span className="font-bold">Summary:</span>
                <br />
                This project was about re-designing employees' internal
                communication portal to improve usability, accessibility,
                intuitiveness, and cleanliness by re-imagining how the clinical
                service should accommodate the patients from the clinician's
                point of view.
              </p>
              <ul className="py-3">
                <span className="font-bold">Delivered Outcome(s):</span>
                <br />
                My team and I have re-designed...
                <li>- the navigation menu</li>
                <li>- the profile page</li>
                <li>
                  - each page that is connected to the portal main navigation
                </li>
                <li>
                  - an interactive message or alert for each action or each page
                </li>
                <li>- the video-call session feature</li>
              </ul>
            </div>
            <div className="mt-20">
              <ProjectCard image={TeleVUCover} alt="TeleVU Suite" />
            </div>
          </div>
          <div className="cursor-pointer text-right">
            {!televuPopUp && (
              <button
                onClick={() => {
                  setTelevuPopUp(true);
                }}
                className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
              >
                Read More 📖
              </button>
            )}
          </div>
          <div>{televuPopUp && <Televu setTelevu={setTelevuPopUp} />}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
