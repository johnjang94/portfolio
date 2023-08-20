import React from "react";
import List from "../../../utils/dev/more/to-do-list.png";

export default function ToDoList1() {
  return (
    <div className="mt-20">
      {/* Leaf International Times */}
      <section className="px-4.5">
        <div className="px-5 pb-5">
          <h1 className="project-heading font-semibold">
            Mini To-Do List Web Application (JavaScript)
          </h1>
          <span className="body-text">(made in) 12.2022</span>
        </div>
        <div className="body-text xl:flex flex-nowrap">
          <img
            src={List}
            width={1000}
            alt="Leaf International Times"
            className="rounded-lg"
          />
          <div className="px-2">
            <p>&#60;&#60; This is a self-initiated project &#62;&#62;</p>
            <p>
              This is the very first to do list web application that I have made
              using JavaScript.
              <br />
              I did not have any particular motivation to create this web
              application. Rather, I was taking an online course for JavaScript
              certificate and part of the assignment from the course was to
              create a to do list like this.
              <br />I found that it was a challenge to create a to do list even
              though the functions that it attains are quite simple and easy to
              use.
            </p>
            <br />
            <p>
              It was quite meaningful to me that I have advanced myself to
              create an interactive web-based application that is
              mobile-responsive using advanced level of modern JavaScript.
              Although the web application is not complex enough in comparison
              to other existing applications, I had a great opportunity to learn
              how to use RESTful API during the process
            </p>
          </div>
        </div>
        <div className="body-text xl:px-5">
          <ul className="xl:mt-5">
            &#60;&#60; Main Features &#62;&#62;
            <li>
              Users can add new to do items in the list - they can either click
              the "+" button or just press enter
            </li>
            <li>
              Users can click the green check mark to indicate that they have
              completed the particular item on the list
            </li>
            <li>
              Users can click different tabs to see what items remain to be
              completed and what items are currently completed
            </li>
            <li>
              Users can delete items on the list (regardless of the completion)
            </li>
            <li>Users can scroll down the screen if the items are lengthy</li>
          </ul>
          <br />
          <div className="flex">
            <p className="mr-5 font-semibold">Github Link</p>
            <a
              href="https://github.com/johnjang94/to-do-app"
              className="text-[blue]"
            >
              Leaf International Times source code
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">To Do List Link</p>
            <a
              href="https://johnjang94.github.io/to-do-app/"
              className="text-[blue]"
            >
              Leaf International Times
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Front-End</p>
            <p>JavaScript</p>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Deployment</p>
            <p>Github</p>
          </div>
        </div>
      </section>
    </div>
  );
}
