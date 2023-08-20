import React from "react";
import { Link } from "react-router-dom";

export default function MoreButton(props) {
  return (
    <div>
      <Link
        to={props.link}
        className="inline-block text-white uppercase text-base tracking-[0.15rem] transition-all duration-[0.3s] relative overflow-hidden z-[1] px-5 py-3 rounded-[10rem] after:absolute after:w-full after:h-full after:bg-[#0cf] after:z-[-2] after:rounded-[10rem] after:left-0 after:bottom-0 before:absolute before:w-[0%] before:h-full before:bg-[#008fb3] before:transition-all before:duration-[0.3s] before:z-[-1] before:rounded-[10rem] before:left-0 before:bottom-0 hover:text-white hover:before:w-full"
      >
        {props.content}
      </Link>
    </div>
  );
}
