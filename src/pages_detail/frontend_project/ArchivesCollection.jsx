import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import LeafTimes from "./Archives/LeafTimes";
import GuessNumber from "./Archives/GuessNumber";
import ToDoList1 from "./Archives/ToDoList1";
import FrisbeeSite from "./Archives/FrisbeeSite";
import CarrotGame from "./Archives/CarrotGame";

export default function ArchivesCollection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      <header>
        <Navigation />
      </header>
      <section>
        <section>
          <h1 className="main-heading my-10 text-center">Front End Archives</h1>
        </section>
        <CarrotGame />
        <LeafTimes />
        <GuessNumber />
        <ToDoList1 />
        <FrisbeeSite />
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
