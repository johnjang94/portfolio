import React, { useEffect } from "react";
import video from "../utils/about/hobbies/boy_with_luv.mp4";
import video2 from "../utils/about/hobbies/black_swan_cover.mp4";
import video3 from "../utils/about/hobbies/video-edit.mp4";

export default function Hobbies({ popupActive1, setPopupActive1 }) {
  useEffect(() => {
    if (popupActive1) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popupActive1]);
  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setPopupActive1(false)}
    >
      <div className="bg-[white] w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-[20px]">
        <button
          className="absolute w-[168vw]"
          onClick={() => setPopupActive1(false)}
        >
          &#x2715;
        </button>
        <header className="main-heading text-center">My Hobbies</header>
        <div>
          <h1 className="text-4xl text-center my-[30px]">Dancing</h1>
          <h2 className="text-center text-base lg:text-xl xl:text-xl my-5">
            Showcase 2 Black Swan by BTS (cover video) 2021
          </h2>
          <video controls className="xl:px-20 px-5 mx-auto">
            <source src={video2} type="video/mp4" control />
          </video>
          <h2 className="text-center text-base lg:text-xl xl:text-xl my-5">
            Showcase 1 Boy With Luv by BTS (cover video) 2019
          </h2>
          <video controls className="xl:px-20 px-5 mx-auto">
            <source src={video} type="video/mp4" control />
            <p>
              Your browser does not have the technical support to play this
              video
            </p>
          </video>
        </div>
        <div>
          <h1 className="text-4xl text-center my-[30px]">Video Editing</h1>
          <h2 className="text-center text-base lg:text-xl xl:text-xl my-5">
            Catholic Conference Event (Rise Up) 2019
          </h2>
          <video controls className="xl:px-20 px-5 mx-auto">
            <source src={video3} type="video/mp4" control />
            <p>
              Your browser does not have the technical support to play this
              video
            </p>
          </video>
        </div>
      </div>
    </div>
  );
}
