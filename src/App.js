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
        discription:
          "* One team per department in a college is allowed.\n * Two participants or solo per team.\n* Minimum 10 slides.\n* Duration:3-4 minutes.\n* Judge decision will be the final.\n",
      },
      {
        id: 1,
        technical: true,
        title: "Quiz",
        discription: "This is for quiz events",
      },
      {
        id: 2,
        technical: true,
        title: "Tech Connection",
        discription: "This is for tech connection events",
      },
      {
        id: 3,
        technical: true,
        title: "Debug",
        discription:
          "* One team per department in a college is allowed. \n* Two participants per team.\n * Two rounds will be held.\n* First round:Quiz \n* Second round:Debugging\n* Duration:2 hours\n* Judge decision will be the final.",
      },
      {
        id: 4,
        technical: true,
        title: "Web dev",
        discription: "This is Web development event",
      },
      {
        id: 5,
        technical: true,
        title: "Poster Designing",
        discription: "This is for Poster Designing event",
      },
      {
        id: 6,
        technical: true,
        title: "Tech Debate",
        discription: "This is Tech Debate event",
      },
      {
        id: 7,
        technical: true,
        title: "Flag Hunt - CTF",
        discription: "",
      },
      {
        id: 8,
        technical: false,
        title: "Singing",
        discription: "This is for Singing event",
      },
      {
        id: 9,
        technical: false,
        title: "Dance",
        discription: "This is for Dance event",
      },
      {
        id: 10,
        technical: false,
        title: "Photography",
        discription: "This is for Photography",
      },
      {
        id: 11,
        technical: false,
        title: "Mime",
        discription: "This is for Mime",
      },
      {
        id: 12,
        technical: false,
        title: "Adzap",
        discription: "This is for Adzap Event",
      },
      {
        id: 13,
        technical: false,
        title: "Channel surfing",
        discription: "This is for Channel Surfing event",
      },
      {
        id: 14,
        technical: false,
        title: "Drawing ",
        discription: "This is for Drawing event",
      },
      {
        id: 15,
        technical: false,
        title: "Rangoli",
        discription: "This is for Rangoli event",
      },
    ]);
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "visible";
    }, 4000);
  }, []);

  if (isLoading) {
    document.body.style.overflow = "hidden";
  }
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
    <BrowserRouter>
      <Navbar />

      <div className="main-page h-fit">
        <div className="pt-10">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/technical" element={<Technical events={events} />} />
            <Route
              path="/nonTechnical"
              element={<NonTechnical events={events} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
