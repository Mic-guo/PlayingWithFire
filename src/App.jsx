import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "./index.css";

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 700,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
  animateTrailer(e, interacting);
};

function App() {
  return (
    <>
      <div
        id="trailer"
        className=" h-8 w-8 bg-white rounded-3xl fixed left-0 top-0 z-[10000] pointer-events-none opacity-1 transition-opacity duration-500 ease-in"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="-4 -4 24 24"
          stroke="currentColor"
        >
          <path d="M5 12h14m-7-7l7 7-7 7"></path>
        </svg>
        <div className="text-white w-screen -ml-10 pt-1">click to continue</div>
      </div>
      <div className=" cursor-none">
        <h1 className="flex justify-center items-center text-center w-screen h-screen bg-zinc-900">
          <div className=" font-bold text-white text-7xl select-none">
            Your Road <br /> to <br /> Financial Freedom
          </div>
        </h1>
      </div>
    </>
  );
}

export default App;
