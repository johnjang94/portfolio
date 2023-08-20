import React from "react";
import Audio from "../bgm/portfolio_greeting.mp3";

export default function Greeting() {
  return (
    <audio controls autoPlay className="opacity-0 absolute">
      <source src={Audio} type="audio/mpeg" />
    </audio>
  );
}
