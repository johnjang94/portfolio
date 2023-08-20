import React, { useEffect } from "react";
import styles from "../css/AudioBox.module.css";
import Music from "./Music";

let audioBox;

export default function AudioBox() {
  useEffect(() => {
    audioBox = document.getElementsByClassName(styles.audio_box)[0];
    setTimeout(() => {
      audioBox.style.transform = "translateX(-22vw)";
      audioBox.style.transition = "all 1.5s ease-in-out";
      audioBox.style.opacity = 0.3;
    }, 2000);

    audioBox.addEventListener("mouseenter", () => {
      audioBox.classList.add("hover");
      audioBox.style.transform = "translateX(0px)";
      audioBox.style.transition = "all 1s ease-in-out";
      audioBox.style.opacity = 1;
    });

    audioBox.addEventListener("mouseleave", () => {
      audioBox.classList.remove("hover");
      audioBox.style.transform = "translateX(-22vw)";
      audioBox.style.transition = "all 1s ease-in-out";
      audioBox.style.opacity = 0.3;
    });
  });

  return (
    <div className={styles.audio_box}>
      <Music />
    </div>
  );
}
