import React, { useState } from "react";

export default function MusicPlayer() {
  const musicList = [
    { song: "../bgm/believe.mp3", index: "Believe" },
    { song: "back_to_back.mp3", index: "Back to Back" },
    { song: "better_me.mp3", index: "Better" },
    { song: "Far_Out.mp3", index: "Far" },
    { song: "Fire_and_Honour.mp3", index: "Fire & Honour" },
    { song: "Legend.mp3", index: "Legend" },
    { song: "Lullaby.mp3", index: "Lullaby" },
    { song: "Quantum.mp3", index: "Quantum" },
    { song: "Riding_the_Light.mp3", index: "Riding" },
    { song: "Sun_and_Steel.mp3", index: "Sun & Steel" },
    { song: "Triumph.mp3", index: "Triumph" },
    { song: "upbeat.mp3", index: "Upbeat" },
    { song: "Being_Alive.mp3", index: "Being alive" },
    { song: "Believer.mp3", index: "Believer" },
    { song: "Ethereal.mp3", index: "Ethereal" },
    { song: "feel_again.mp3", index: "Feel" },
    { song: "hope.mp3", index: "Hope" },
    { song: "life.mp3", index: "Life" },
    { song: "Never_Have_I_Ever.mp3", index: "Never" },
    { song: "Remeber.mp3", index: "Remeber" },
    { song: "Sands.mp3", index: "Sands" },
    { song: "Time_is_up.mp3", index: "Time" },
    { song: "unwritten.mp3", index: "Unwritten" },
    { song: "Why_Do_I.mp3", index: "Why" },
  ];

  const [currentSong, setCurrentSong] = useState(musicList[0].song);

  return (
    <div>
      <audio
        src={musicList[0].song}
        controls
        onPlay={() => {
          setCurrentSong(currentSong);
        }}
      />
    </div>
  );
}

/**
 * , { useCallback, useEffect, useRef, useState }
 * 
 *     const [currentSong, setCurrentSong] = useState(musicList.currentSong[0]);

    useEffect(()=>{
        autoPlay();
        setCurrentSong(musicList.current[0]);
        playMusic(currentSong);  
        window.addEventListener('ended', nextSong);
    }, [autoPlay, currentSong, nextSong])

    const playMusic = (song) => {
        let audio = new Audio('./src/bgm' + song); 
        audio.play();
       } 

       const autoPlay = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * musicList.length);
        const randomSong = musicList[randomIndex];
        playMusic(randomSong); 
})

      const nextSong = useCallback(() => {
        const currentSongIndex = musicList.indexOf(currentSong);
        const nextSongIndex = currentSongIndex + 1;
        if(nextSongIndex >= musicList.length){
          playMusic(musicList[0]);
        } else {
          playMusic(musicList[nextSongIndex]);
        }
      })
 */
