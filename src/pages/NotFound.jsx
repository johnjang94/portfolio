import React from "react";
import Navigation from "../components/Navigation";

export default function NotFound() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="w-[90vw] h-[70vh] bg-[lightgray] text-[black] text-center blur-[50%] justify-center items-center mx-[50px] my-20 pt-[180px] rounded-[20px]">
        <p className="text-5xl text-[red]">Oops!</p>
        <p className="text-xl">
          We are sorry, but we could not find what you were looking for!
        </p>
      </div>
    </>
  );
}
