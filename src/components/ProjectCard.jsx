import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="flex xl:mt-24 mt-5 xl:px-14 lg:px-5 md:px-3">
      <div className="mt-[-10px] absolute xl:w-[8vw] xl:ml-0 lg:w-[9vw] lg:ml-[70px]">
        {props.tag && (
          <p className="p-2.5 rounded-[20px] bg-[bisque]">{props.tag}</p>
        )}
      </div>
      <div className="mt-[15px] flex flex-wrap xl:flex-nowrap justify-center">
        <div>
          {props.image ? (
            <img
              src={props.image}
              width={600}
              alt="TeleVU"
              className="w-[80vw] xl:h-[30vw] md:h-[45vw] rounded-lg"
            />
          ) : (
            <p>The image does not exist</p>
          )}
        </div>
        <div className="w-[90vw] xl:w-[60vw] md:w-[85vw] xl:p-0 xl:pl-5 p-7 mx-auto">
          {props.name ? (
            <h1 className="sub-heading mb-1 xl:text-3xl xl:mt-0 mt-[-15px]">
              {props.name}
            </h1>
          ) : (
            <h1>Title is missing</h1>
          )}
          {props.date ? (
            <p className="body-text">{props.date}</p>
          ) : (
            <p className="body-text">Dates are missing</p>
          )}
          {props.description ? (
            <div className="body-text">{props.description}</div>
          ) : (
            <p className="body-text">description is missing</p>
          )}
        </div>
      </div>
    </div>
  );
}
