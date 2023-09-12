import React from "react";
import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

import { useDarkMode } from "../context/DarkModeProvider";
import { BsBrightnessHigh } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";

// import AudioBox from "./AudioBox";
// import MusicPlayer from "./MusicPlayer";

export default function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      {isTabletOrMobile ? (
        <div className="flex justify-between items-center">
          <header>
            <button onClick={handleClick}>
              {!darkMode && (
                <img
                  src={require("../utils/logo/logo-dark-bg.png")}
                  alt="Logo for Bright Mode"
                  className="w-[40px]"
                />
              )}
              {darkMode && (
                <img
                  src={require("../utils/logo/logo-white-bg.png")}
                  alt="Logo for Bright Mode"
                  className="w-[40px]"
                />
              )}
            </button>
          </header>
          <div>
            <button
              onClick={toggleDarkMode}
              className="text-[35px] bg-transparent cursor-pointer border-[none] ml-5"
            >
              {!darkMode && <HiMoon />}{" "}
              {darkMode && (
                <BsBrightnessHigh className="text-[white] pt-[5px] pb-0 px-0" />
              )}
            </button>
            <div className="inline-block">
              <button className="text-[var(--color-text)] text-4xl px-4 py-2 rounded-lg">
                <RxHamburgerMenu />
              </button>
              <div className="absolute hidden bg-white rounded-lg border border-gray-200">
                <Link
                  to="/home"
                  className="block w-[85vw] md:w-[91vw] lg:w-[93vw] px-5 py-4 text-gray-700 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block w-[85vw] md:w-[91vw] lg:w-[93vw] px-5 py-4 text-gray-700 hover:bg-gray-100"
                >
                  About
                </Link>
              </div>
              <style jsx>{`
                .absolute {
                  display: none;
                }

                button:hover + .absolute,
                .absolute:hover {
                  display: block;
                  margin-left: -75vw;
                }

                @media (max-width: 1280px) {
                  .absolute {
                    display: none;
                  }

                  button:hover + .absolute,
                  .absolute:hover {
                    display: block;
                    margin-left: -88vw;
                  }
                }

                @media (max-width: 1024px) {
                  .absolute {
                    display: none;
                  }

                  button:hover + .absolute,
                  .absolute:hover {
                    display: block;
                    margin-left: -85vw;
                  }
                }

                @media (max-width: 768px) {
                  .absolute {
                    display: none;
                  }

                  button:hover + .absolute,
                  .absolute:hover {
                    display: block;
                    margin-left: -76vw;
                  }
                }

                @media (max-width: 500px) {
                  .absolute {
                    display: none;
                  }

                  button:hover + .absolute,
                  .absolute:hover {
                    display: block;
                    margin-left: -74vw;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <header>
            {!darkMode && (
              <img
                src={require("../utils/logo/logo-dark-bg.png")}
                alt="Logo for Bright Mode"
                className="w-[40px]"
              />
            )}
            {darkMode && (
              <img
                src={require("../utils/logo/logo-white-bg.png")}
                alt="Logo for Dark Mode"
                className="w-[40px]"
              />
            )}
          </header>
          <div className="flex justify-center items-center">
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/home">Home</Link>
            </button>
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/about">About</Link>
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-[35px] bg-transparent cursor-pointer border-[none] ml-5"
            >
              {!darkMode && <HiMoon />}{" "}
              {darkMode && (
                <BsBrightnessHigh className="text-[white] pt-[5px] pb-0 px-0" />
              )}
            </button>
          </div>
        </div>
      )}
      {/* <MusicPlayer /> */}
      {/* <AudioBox /> */}
    </div>
  );
}
