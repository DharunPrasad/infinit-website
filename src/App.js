import React, { useEffect, useState } from "react";
import "./App.css";
import Terminal from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Technical from "./components/Technical";
import NonTechnical from "./components/nonTechnical";

import flags from "./flag";
console.log(flags);

const createProgressFrames = (frameCount, progressCount, maxWidth, delay) => {
  const frames = [];
  const step = Math.ceil(progressCount / frameCount);

  for (let i = 0; i < progressCount; i += step) {
    const progressText = ` ${i}/${progressCount}`;
    const filledLen = progressText.length + 2;
    const intervalCount = maxWidth - filledLen;

    const filledCount = Math.ceil((i / progressCount) * intervalCount);
    const unfilledCount = intervalCount - filledCount;
    const frame = `[${"#".repeat(filledCount)}${"-".repeat(
      unfilledCount
    )}] ${progressText}`;

    frames.push({
      text: frame,
      delay,
    });
  }

  return frames;
};

const progress = [
  {
    text: "Guru Nanak College (autonomous)",
    cmd: true,
  },
  {
    text: "init InfinIT 2k22",
    cmd: true,
  },
  {
    text: "May 20...",
    cmd: false,
  },
  {
    text: "Technical Events...",
    cmd: false,
    frames: createProgressFrames(10, 100, 60, 1),
  },
  {
    text: "[1/7] Paper Presentation",
    cmd: false,
  },
  {
    text: "[2/7] Quiz",
    cmd: false,
  },
  {
    text: "[3/7] Connection",
    cmd: false,
  },
  {
    text: "Non Technical Events...",
    cmd: false,
    frames: createProgressFrames(10, 100, 60, 1),
  },
  {
    text: "[1/7] Singing",
    cmd: false,
  },
  {
    text: "[2/7] Dance",
    cmd: false,
  },
  {
    text: "[3/7] Mime",
    cmd: false,
  },
  {
    text: "Arambikalamaa !",
    cmd: false,
  },
  {
    text: "",
    cmd: true,
  },
];
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setEvents([
      {
        id: 0,
        technical: true,
        title: "Paper Presentation",
        discription: "This is awsome Paper ",
      },
      {
        id: 1,
        technical: true,
        title: "Quiz",
        discription: "This is awsome debug",
      },
      {
        id: 2,
        technical: true,
        title: "Tech Connection",
        discription: "This is awsome ctf",
      },
      {
        id: 3,
        technical: true,
        title: "Debug",
        discription: "This is awsome quiz",
      },
      {
        id: 4,
        technical: true,
        title: "Web dev",
        discription: "This is awsome quiz",
      },
      {
        id: 5,
        technical: true,
        title: "Poster Designing",
        discription: "This is awsome quiz",
      },
      {
        id: 6,
        technical: true,
        title: "Tech Debate",
        discription: "This is awsome quiz",
      },
      {
        id: 7,
        technical: true,
        title: "Flag Hunt - CTF",
        discription: "This is awsome quiz",
      },
    ]);
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  // Custom css for loader

  return isLoading ? (
    // If page is still loading then splash screen
    <div>
      <Terminal
        lines={progress}
        interval={30}
        replay={false}
        isLoading={isLoading}
      />
    </div>
  ) : (
    <div className="main-page h-fit">
      <Navbar />
      <div className="pt-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/technical" element={<Technical events={events} />} />
            <Route path="/nonTechnical" element={<NonTechnical />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
