import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-white border-[1px] border-solid border-gray-200 p-5 rounded-[20px] mx-auto">
      <h2 className="mb-4 text-3xl ">Contact</h2>
      <div className="flex flex-1 flex-wrap justify-between items-center">
        <div>
          <div className="flex flex-1 flex-wrap">
            <p>My email address:</p>
            <p className="text-[#0078CC] pl-3">jscolbe9675@gmail.com</p>
          </div>
        </div>
        <div>
          {/* the below link will be changed to my Github account */}
          <Link to="https://github.com/johnjang94">
            <FaGithubSquare className="text-6xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
