import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Televu({ setTelevu }) {
  useEffect(() => {
    if (setTelevu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setTelevu]);
  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setTelevu(false)}
    >
      <div className="bg-white w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-3xl">
        <button
          className="relative float-right"
          onClick={() => setTelevu(false)}
        >
          &#x2715;
        </button>
        <div className="mx-auto md:px-20">
          <h1 className="font-bold text-center text-4xl py-10">
            Remote Healthcare to Reduce Wait Times
          </h1>
          <h3>
            Company Name:{" "}
            <span className="font-semibold">
              TeleVU Innovation Incorporation
            </span>
          </h3>
          <ul className="py-5">
            Project Objective(s):
            <li>
              Re-design the employee-only web portal to increase the usability
              among clinicians
            </li>
          </ul>
          <p className="pb-2.5">
            Special Note:
            <br />
            this was a real-world project that I have participated with a few
            other colleagues as a team.
          </p>
          <p>
            <span className="py-2.5">Background Story:</span>
            <br />
            COVID-19 was a sudden chemical attack that led a countless number of
            people to death. No one had anticipated it coming and it was the
            attack the separated or isolated so many people around the world.
            Canada was not an exception.
          </p>
          <p className="py-2.5">
            If COVID-19 was only isolating people, that would have been fine
            enough.
            <br />
            Unfortunately, it left a huge legacy called "back log" or "delay in
            the system" in different fields or across a number of sectors at
            different levels. The issues at the hospitals was one of the biggest
            issues that received the spotlight. It was good enough to imagine
            how horrendous it might have been to wait to see a doctor when no
            one knows if you were to be dead in the next minute due to the
            virus.
          </p>
          <p>
            Since the return to what we used to think as "normal" was slow or
            almost non-existent during the period of time when the patients
            outnumbered the number of available clinicians to treat them, the
            public needed an alternative solution. Though, they jus were not
            certain what options were available for them.
          </p>
          <p className="py-2.5">
            <span className="underline">Caught on Radar</span>
            <br />
            Well, there is this start-up company that came up with a new idea:
            let's connect clinicians and patients even remotely. The idea came
            from how people preferred working remotely due to the impact of the
            pandemic rather than working in-office.
          </p>
          <p className="py-2.5">
            <span className="underline">Alternative Solution</span>
            <br />
            As a solution, TeleVU Innovations took its role in remotely
            connecting the clinicians and the patients using video calls. The
            idea was very similar to the virtual meeting such as Zoom or Skype,
            except that the services that were provided by TeleVU was secured
            and encrypted. In addition, TeleVU offered a similar product to
            Google's Google Glass and they called it "TeleVU Smart Glass". The
            idea was that the clinician who is physically present in their
            clinical office will be able to watch the patient and pass the
            instruction to the guardian how to treat the patient properly while
            the guardian is putting on the Smart Glass to communicate with the
            clinician.
          </p>
          <p className="py-2.5">
            <span className="underline">Facing Challenges</span>
            <br />
            Launching their business did not seem easy. They needed to require
            the Smart Glass for its functionalities a bit frequently.
            Furthermore, they were not using the cutting-edge technology for
            usability on their web products. In fact, major complaints were
            arising in regards to how confusing it is to find buttons and
            navigate from one web page to another.
          </p>
          <ul>
            <span className="underline">Bringing Solution</span>
            <br />
            Having said that, my design team and I have re-designed...
            <br />
            <li>- recreate the navigation menu</li>
            <li>
              - improve each portal page by adding page descriptions and
              interactive messages
            </li>
            <li>
              - rebuilt video-call session window (following the
              industry-standard)
            </li>
          </ul>
        </div>
        <div className="cursor-pointer text-center my-10">
          <button className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
            <Link to="https://johnjang94.github.io/televu/index.html">
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
