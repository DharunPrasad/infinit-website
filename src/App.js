import React, { useEffect, useState } from "react";
import "./App.css";
import Terminal from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  useEffect(() => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/technical" element={<div>Tech</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
