import React, { useState } from "react";
import Believer from "../bgm/Believer.mp3";

export default function Music() {
  const songs = [
    { title: `Believer`, src: `../bgm/Believer.mp3` },
    { title: `Fake Love EDM`, src: `../bgm/Fake_Love_EDM.mp3` },
  ];

  const [title] = useState(songs[0].title);

  return (
    <div>
      {title && <p>{title}</p>}
      <audio src={Believer} controls autoPlay />
    </div>
  );
}

/**
 * {
  /* <button onClick={nextSong}>Next song</button>
      <button onClick={prevSong}>Previous song</button> */
/*}

{
  /* <audio url={songs[currentSong].path} controls autoPlay onEnded={Random} /> */
/*}

// function Random() {
//   // Get a random index between 0 and the length of the song list
//   const randomIndex = Math.floor(Math.random() * songs.length);

//   // Set the current song to the song at that random index
//   setCurrentSong(songs[randomIndex].src);
// }

// ============ THE LIST OF SONGS ==========
// import Believer from "../bgm/Believer.mp3";
// import DanceMonkey from "../bgm/dance-monkey.mp3";
// import FakeLoveEDM from "../bgm/Fake_Love_EDM.mp3";
// import Flower from "../bgm/Flower.mp3";
// import IDOLREMIX from "../bgm/idol-remix.mp3";
// import LAW from "../bgm/LAW.mp3";
// import Dance from "../bgm/lets-dance.mp3";
// import Levitating from "../bgm/Levitating.mp3";
// import NeverAlone from "../bgm/never-be-alone.mp3";
// import Peace from "../bgm/peaceful-piano.mp3";
// import RISE from "../bgm/Rise_up.mp3";
// import SALT from "../bgm/salt-is-my-sugar.mp3";
// import YetToCome from "../bgm/yet_to_come.mp3";

// const audios = [
//   Believer,
//   DanceMonkey,
//   FakeLoveEDM,
//   Flower,
//   IDOLREMIX,
//   LAW,
//   Dance,
//   Levitating,
//   NeverAlone,
//   Peace,
//   RISE,
//   SALT,
//   YetToCome,
// ];

// const songs = [
//   {
//     title: `'Salt is My Sugar' by Marie Marie`,
//     path: "../bgm/salt-is-my-sugar.mp3",
//   },
//   { title: `'Flower' by Blackpink Jisoo`, path: "../bgm/Flower.mp3" },
//   {
//     title: `'Never Be Alone' by The Fat Rat`,
//     path: "../bgm/never-be-alone.mp3",
//   },
//   { title: `'Yet To Come' by BTS`, path: "../bgm/yet_to_come.mp3" },
//   { title: `'Fake Love EDM' by BTS`, path: "../bgm/Fake_Love_EDM.mp3" },
//   { title: `'Stray Cats' by Stray Cats`, path: "../bgm/stray-cats.mp3" },
//   { title: `'Idol Remix' by BTS`, path: "../bgm/idol-remix.mp3" },
//   {
//     title: `'Peaceful Piano' by Unknown`,
//     path: "../bgm/peaceful-piano.mp3",
//   },
//   {
//     title: `'Let's Shut up and Dance' by Jason Derulo (ft. Lay & NCT 127)`,
//     path: "../bgm/lets-dance.mp3",
//   },
//   { title: `'LAW' by Czaer`, path: "../bgm/LAW.mp3" },
//   { title: `'The Nights' by Avicii`, path: "../bgm/the-nights.mp3" },
//   { title: `'Believer' by Imagine Dragon`, path: "../bgm/Believer.mp3" },
//   {
//     title: `'Dance Monkey' by Tones and I`,
//     path: "../bgm/dance-monkey.mp3",
//   },
//   { title: `'Levitating' by Dua Lipa`, path: "../bgm/Levitating.mp3" },
// ];

 * 
 */
