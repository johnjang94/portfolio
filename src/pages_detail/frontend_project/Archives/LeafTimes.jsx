import React from "react";
import NewsApp from "../../../utils/dev/more/news-app.png";

export default function LeafTimes() {
  return (
    <div className="mt-20">
      <section className="px-4.5">
        <div className="px-5 pb-5">
          <h1 className="project-heading font-semibold">
            Leaf Times Web Application
          </h1>
          <span className="body-text">(made in) 04.2023</span>
        </div>
        <div className="xl:flex flex-nowrap">
          <img
            src={NewsApp}
            width={1000}
            alt="Leaf International Times"
            className="rounded-lg"
          />
          <div className="body-text">
            <p>&#60;&#60; This is a self-initiated project &#62;&#62;</p>
            <p>
              As technology advances, lots of people have moved on feeding news
              from newspapers to online articles on the internet using
              computers. However, as one of the readers, I have still
              experienced some level of inconvenience due to the fact that I
              needed to access to each individual press official websites in
              order to feed their articles. This has motivated me to create a
              web-based news application, so that I do not necessarily need to
              manually visit each individual website but to access all of them
              in one application.
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
              Users can search for any article related to a keyword of their
              interest
            </li>
            <li>
              Users can browse different articles from multi press sources by
              clicking each tab
            </li>
            <li>
              Users get to find out the latest news articles for each category
            </li>
            <li>Users can view 10 articles per page</li>
            <li>
              Users can move to next page or return to the previous page using
              pagination
            </li>
          </ul>
          <br />
          <div className="flex">
            <p className="mr-5 font-semibold">Github Link</p>
            <a
              href="https://github.com/johnjang94/news-times"
              className="text-[blue]"
            >
              Leaf International Times source code
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">News App Link</p>
            <a
              href="https://johnjang94.github.io/news-times/"
              className="text-[blue]"
            >
              Leaf International Times
            </a>
          </div>
          <div className="flex">
            <p className="mr-5 font-semibold">Front-End</p>
            <p>JavaScript, RESTful API</p>
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
