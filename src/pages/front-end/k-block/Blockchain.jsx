import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blockchain({ setBlock }) {
  useEffect(() => {
    if (setBlock) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setBlock]);
  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setBlock(false)}
    >
      <div className="bg-white w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-3xl">
        <button
          className="relative float-right"
          onClick={() => setBlock(false)}
        >
          &#x2715;
        </button>
        <div className="mx-auto md:px-20">
          <h1 className="font-bold text-center text-4xl py-10">
            Stay Connected for Live Updates
          </h1>
          <h3>
            Special Note: <br />
            <span>
              This is a real-world web application that I have built along with
              my colleagues. <br />
              This is an open-source project that is associated with the crews
              from Tech Fleet Professional Association.
            </span>
          </h3>
          <ul className="py-5">
            Project Objective(s):
            <li>built the re-design of blockchain website.</li>
          </ul>
          <p>
            <span className="py-2.5">Background Story:</span>
            <br />
            <span className="underline py-2.5">How I approached</span>
            <br />
            It's been almost 2 years since I began studying investment and
            educating myself how to make better investments. It was indeed hard
            to miss out on stories about blockchain as well. Back then,
            blockchain was not my huge interest because I knew almost nothing
            about blockchain.
          </p>
          <p className="py-2.5">
            The project has changed my attitude because I had a chance to learn
            about what people think about blockchain and why they use
            blockchain. Among all reasons, what I understood (or that I have
            tried to understand at the best of my abilities) is that the
            transactions are secured when blockchain is used.
          </p>
          <p className="py-2.5">
            <span className="underline">At Issue</span>
            <br />
            If there was any particular issue, the users found the existing
            blockchain websites not as impressive and clean. They understand
            that there are an overwhelming amount of information to be shown,
            but most of the blockchain websites seem to display all kinds of
            information without taking any priorities.
          </p>
          <div className="py-1.5">
            <p>
              Seizing this opportunity, I have decided to join a group of
              developers who are willing to build the new look of blockchain
              website, where the design idea was provided by the Design Team,
              and as a blockchain web developer, the following tasks are what I
              have completed:
            </p>
            <ul>
              <li>- we have rebuilt the homepage</li>
              <li>
                - we have pages that indicate detailed transaction information
                and transaction history
              </li>
              <li>
                - we have been rebuilding the pages for the mobile
                responsiveness
              </li>
            </ul>
          </div>
          <ul className="py-2.5">
            After all, this was a very fun project and made me think of the
            following aspects:
            <br />
            <li>
              - I need to think about how I am going to organize the files
            </li>
            <li>
              - I need to think about how I am creating the structure of each
              page
            </li>
            <li>
              - I need to think about if there is any component that can be
              repeated, and in that case, if I can create a clean component that
              can be reused anywhere I want.
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:text-right text-center my-10">
          <button className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:content after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:content before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full">
            <Link to="https://kblock.vercel.app/">
              Check out the Project ➡️
            </Link>
          </button>
          <p className="text-sm md:text-right text-center px-2">
            you will be re-directed to an external website.
          </p>
        </div>
      </div>
    </div>
  );
}
