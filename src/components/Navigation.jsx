import React from "react";
import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

import { useDarkMode } from "../context/DarkModeProvider";
import { BsBrightnessHigh } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";

export default function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="px-10 pt-5">
      {isTabletOrMobile ? (
        <div className="flex justify-between items-center">
          <header>
            {!darkMode && (
              <Link to="/home">
                <img
                  src={require("../utils/logo/black-logo/black-logo.ico")}
                  alt="Logo for Bright Mode"
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
            )}
            {darkMode && (
              <Link to="/home">
                <img
                  src={require("../utils/logo/white-logo/white-logo.ico")}
                  alt="Logo for Bright Mode"
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
            )}
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
                <Link
                  to="/uxdesign"
                  className="block w-[85vw] md:w-[91vw] lg:w-[93vw] px-5 py-4 text-gray-700 hover:bg-gray-100"
                >
                  Design Overview
                </Link>
                <Link
                  to="/frontend"
                  className="block w-[85vw] md:w-[91vw] lg:w-[93vw] px-5 py-4 text-gray-700 hover:bg-gray-100"
                >
                  Front-End Overview
                </Link>
              </div>
              <style jsx="true">{`
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

                @media (max-width: 400px) {
                  .absolute {
                    display: none;
                  }

                  button:hover + .absolute,
                  .absolute:hover {
                    display: block;
                    margin-left: -60vw;
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
              <Link to="/home">
                <img
                  src={require("../utils/logo/black-logo/black-logo.ico")}
                  alt="Logo for Bright Mode"
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
            )}
            {darkMode && (
              <Link to="/home">
                <img
                  src={require("../utils/logo/white-logo/white-logo.ico")}
                  alt="Logo for Bright Mode"
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
            )}
          </header>
          <div className="flex justify-center items-center">
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/home">Home</Link>
            </button>
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/about">About</Link>
            </button>
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/uxdesign">Design</Link>
            </button>
            <button className="text-2xl p-[25px] text-[var(--color-text)] hover:text-[#4d7fc5]">
              <Link to="/frontend">Front-End</Link>
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
    </div>
  );
}
