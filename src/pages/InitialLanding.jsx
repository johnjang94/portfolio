import React, { useEffect } from "react";
import styles from "../css/InitialLanding.module.css";
import { useNavigate } from "react-router-dom";
import Greeting from "../components/Greeting";

export default function InitialLanding() {
  let cover;
  let title;
  let subtitle;
  let downArrow;
  let click;

  useEffect(() => {
    title = document.getElementsByClassName(styles.cover_title)[0];
    subtitle = document.getElementsByClassName(styles.subtitle)[0];
    downArrow = document.getElementsByClassName(styles.down_arrow)[0];
    click = document.getElementsByClassName(styles.click)[0];

    setTimeout(() => {
      title.style.transform = "translateY(-80px)";
      title.style.transition = "all 1s ease-in-out";
      subtitle.style.display = "block";
      subtitle.style.transform = "translateY(-150px)";
      subtitle.style.opacity = 0;
    }, 1900);

    setTimeout(() => {
      subtitle.style.opacity = 1;
      subtitle.style.transform = "translateY(-20px)";
      subtitle.style.transition = "all 1s ease-in-out";
      subtitle.style.marginTop = "-100px";

      downArrow.style.display = "block";
      downArrow.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
      downArrow.style.opacity = 1;
      downArrow.style.transition = "all 1s ease-in-out";

      click.style.display = "block";
      click.style.opacity = 0;
    }, 3000);

    setTimeout(() => {
      click.style.opacity = 1;
      click.style.transition = "all 1s ease-in-out";
      click.style.marginTop = "140px";
    }, 4000);
  }, []);

  const navigate = useNavigate();

  const Click = () => {
    cover = document.getElementsByClassName(styles.black_cover)[0];

    cover.style.transform = "translateY(-1000px)";
    cover.style.transition = "all 2.5s ease-in-out";
    cover.style.opacity = 0;

    setTimeout(() => {
      navigate("/warning");
    }, 1500);
  };

  return (
    <>
      <Greeting />
      <div className={styles.black_cover} onClick={Click}>
        <h1 className={styles.cover_title}>Welcome</h1>
        <h3 className={styles.subtitle}>to John Jang's Portfolio</h3>
        <div className={styles.down_arrow}></div>
        <p className={styles.click}>(click anywhere to continue)</p>
      </div>
    </>
  );
}
