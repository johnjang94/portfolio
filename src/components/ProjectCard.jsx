import React from "react";

export default function ProjectCard(props) {
  return (
    <div>
      {props.tag && (
        <p className="p-2.5 rounded-3xl bg-[bisque]">{props.tag}</p>
      )}
      <div className="p-3 rounded-lg bg-[#DFEFF6]">
        {props.image ? (
          <img
            src={props.image}
            width={500}
            alt={props.alt}
            className="rounded-lg"
          />
        ) : (
          <p>The image does not exist</p>
        )}
      </div>
    </div>
  );
}
