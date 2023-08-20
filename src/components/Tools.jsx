import React, { useEffect } from "react";

export default function Tools({ popupActive, setPopupActive }) {
  useEffect(() => {
    if (popupActive) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popupActive]);

  return (
    <div
      className="fixed -translate-x-2/4 -translate-y-2/4 w-screen h-screen bg-[rgba(108,106,106,0.556)] left-2/4 top-2/4"
      onClick={() => setPopupActive(false)}
    >
      <div className="bg-[white] w-[87vw] h-[75vh] overflow-scroll overflow-x-hidden mx-auto my-[100px] p-5 rounded-[20px]">
        <button
          className="absolute w-[168vw]"
          onClick={() => setPopupActive(false)}
        >
          &#x2715;
        </button>
        <header className="main-heading text-center">My Tools</header>
        <section>
          <div>
            <h1 className="text-4xl text-center my-8">UX Design</h1>
            <div className="flex flex-wrap xl:flex-nowrap justify-center">
              <div>
                <h2 className="text-center body-text my-5">Figma</h2>
                <img
                  src={require("../utils/about/design/figma.png")}
                  alt="Figma"
                  width={250}
                  height={400}
                  className="mx-auto rounded-[15px]"
                />
              </div>
              <div>
                <h2 className="text-center body-text my-5">Figjam</h2>
                <img
                  src={require("../utils/about/design/figjam.png")}
                  alt="Figjam"
                  width={200}
                  height={200}
                  className="mx-auto rounded-[15px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-center my-[30px]">
              Front End Development
            </h1>
            <div>
              <h1 className="text-center sub-heading mb-5">Languages</h1>
              <div className="flex flex-wrap xl:flex-nowrap justify-center">
                <div className="mx-5">
                  <h2 className="text-center body-text my-5">Learned:</h2>
                  <p className="text-center body-text my-5">JavaScript</p>
                  <img
                    src={require("../utils/about/dev/javascript.png")}
                    alt="JavaScript"
                    width={200}
                    height={200}
                    className="mx-auto rounded-[15px]"
                  />
                </div>
                <div className="mx-5">
                  <h2 className="text-center body-text my-5">
                    Learning in progress:
                  </h2>
                  <p className="text-center body-text my-5">TypeScript</p>
                  <img
                    src={require("../utils/about/dev/typescript.png")}
                    alt="TypeScript"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-center sub-heading my-5">
                  Language Framework
                </h1>
                <div className="mx-5">
                  <h2 className="text-center body-text my-5">
                    Learning in progress:
                  </h2>
                  <p className="text-center body-text my-5">Next.js</p>
                  <img
                    src={require("../utils/about/dev/nextjs.jpeg")}
                    alt="Next.js"
                    width={400}
                    height={400}
                    className="mx-auto rounded-[15px]"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-center sub-heading my-5">
                  Language Libraries
                </h1>
                <div className="flex flex-wrap xl:flex-nowrap justify-center">
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">React</h2>
                    <img
                      src={require("../utils/about/dev/react.png")}
                      alt="React"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">JQuery</h2>
                    <img
                      src={require("../utils/about/dev/jquery.png")}
                      alt="JQuery"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">React Query</h2>
                    <img
                      src={require("../utils/about/dev/reactquery.png")}
                      alt="React Query"
                      width={200}
                      height={200}
                      className="mx-auto rounded-[15px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-center sub-heading my-5">UI Libraries</h1>
                <div className="flex flex-wrap xl:flex-nowrap justify-center">
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">CSS 3</h2>
                    <img
                      src={require("../utils/about/dev/css3.png")}
                      alt="CSS3"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">Tailwind CSS</h2>
                    <img
                      src={require("../utils/about/dev/tailwind.png")}
                      alt="Tailwind CSS"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">Shadcn UI</h2>
                    <img
                      src={require("../utils/about/dev/shadcn.png")}
                      alt="Shadcn UI"
                      width={200}
                      height={200}
                      className="mx-auto rounded-[15px]"
                    />
                  </div>
                  <div className="mx-5">
                    <h2 className="text-center body-text my-5">Radix UI</h2>
                    <img
                      src={require("../utils/about/dev/radixui.png")}
                      alt="Radix UI"
                      width={200}
                      height={200}
                      className="mx-auto rounded-[15px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-center sub-heading my-5">CSS Framework</h1>
                <div className="mx-5 mb-5">
                  <h2 className="text-center body-text my-5">Bootstrap</h2>
                  <img
                    src={require("../utils/about/dev/bootstrap.png")}
                    alt="Bootstrap"
                    width={200}
                    height={200}
                    className="mx-auto rounded-[15px]"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-center sub-heading my-5">
                  Version Control
                </h1>
                <div className="flex flex-wrap xl:flex-nowrap justify-center">
                  <div>
                    <h2 className="text-center body-text my-5">Git</h2>
                    <img
                      src={require("../utils/about/dev/git.png")}
                      alt="git"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-center body-text my-5">Github</h2>
                    <img
                      src={require("../utils/about/dev/github.png")}
                      alt="Github"
                      width={300}
                      height={300}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-center sub-heading my-5">Deployment</h1>
                <h2 className="text-center body-text my-5">Vercel</h2>
                <img
                  src={require("../utils/about/dev/vercel.png")}
                  alt="Vercel"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
