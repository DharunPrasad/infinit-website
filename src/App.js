import React, { useEffect, useState } from "react";
import "./App.css";
import Terminal from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Technical from "./components/Technical";
import NonTechnical from "./components/nonTechnical";
import Ctf from "./components/Ctf";

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
          "* One team per department in a college is allowed.\n * Two participants or solo per team.\n* Minimum 10 slides.\n* Duration: 5+2 minutes.\n* 5 minutes for presentation, 2 minutes for question.\n* Judge decision will be the final.\n",
        logo: "https://www.linkpicture.com/q/ppti.png",
      },
      {
        id: 1,
        technical: true,
        title: "Quiz",
        discription:
          "* One team per department in a college is allowed.\n* Two participants per team.\n* 2 rounds will be held (prelims & finals).\n* Prelims will have choice(MCQ) questions. \n* Final round Questions will not have options.\n* Teams have to answer on a first come first serve basis(buzzer type).\n* Judge decision will be the final.\n",
        logo: "https://www.linkpicture.com/q/qi_2.png",
      },
      {
        id: 2,
        technical: true,
        title: "Tech Connection",
        discription:
          "* One team per department in a college is allowed.\n*  Three participants or solo per team.\n* 3 Rounds will be held.\n* Judge decision will be the final.\n",
        logo: "https://www.linkpicture.com/q/coni_1.png",
      },
      {
        id: 3,
        technical: true,
        title: "Debug",
        discription:
          "* One team per department in a college is allowed. \n* Two participants per team.\n * Two rounds will be held.\n* First round:Quiz \n* Second round:Debugging\n* Duration:2 hours\n* Judge decision will be the final.",
        logo: "https://www.linkpicture.com/q/debugi.png",
      },
      {
        id: 4,
        technical: true,
        title: "Web dev",
        discription:
          "Two teams per college is allowed.\n* Participants should develop the website with only html, css and javascript ( framework, libraries are not allowed ).\n* Submit the website github link to the event incharge through mail.\n* Participants  should send the documentation through mail to the respective event incharges and submit their documentation on the day of the event.\n* Judge decision will be the final.\n",
        logo: "https://www.linkpicture.com/q/webi_2.png",
      },
      {
        id: 5,
        technical: true,
        title: "Poster Designing",
        discription: "This is for Poster Designing event",
        logo: "https://www.linkpicture.com/q/posi.png",
      },
      {
        id: 6,
        technical: true,
        title: "Tech Debate",
        discription:
          "* One team per department in a college is allowed.\n* Two participants or solo per team.\n* Topics will be given ON-SPOT.\n* 15 mins Preparation + 10 mins Debate.\n* Judge decision will be the final.\n",
        logo: "https://www.linkpicture.com/q/debi_1.png",
      },
      {
        id: 7,
        technical: true,
        title: "Tech Hunt - CTF",
        discription:
          "* One team per department in a college is allowed.\n* Two participants per team.\n* Basic web programming knowledge.\n * Duration:1 hour.\n* Judge decision will be the final\n ",
        logo: "https://www.linkpicture.com/q/ctfi.png",
      },
      {
        id: 8,
        technical: false,
        title: "Singing",
        discription:
          "* Two teams per college\n* Solo participants will be admitted \n * Duration should not exceed 3-4 minutes\n* Judge decision will be the final.\n",
      },
      {
        id: 9,
        technical: false,
        title: "Dance",
        discription:
          "* Two teams per college\n* A team should be maximum 6-8 participants is allowed.\n* Participants are requested to keep the audio ready before the event. \n* Duration should not exceed 4-5 minutes.\n* Judge decision will be the final.\n",
      },
      {
        id: 10,
        technical: false,
        title: "Photography",
        discription:
          "* Two teams per college\n* Theme will be given on the spot\n* Duration should not exceed 1 hour.\n* Link will be given to the students to upload the JPEG file.\n* Judge decision will be the final.\n",
      },
      {
        id: 11,
        technical: false,
        title: "Mime",
        discription:
          "* One team per department in a college  is allowed. \n* Minimum 4 and maximum 6 participants are allowed.\n* Duration should not exceed 4-5 minutes. \n* Participants are requested to keep the audio ready before the event. \n* Judge decision will be the  final.\n",
      },
      {
        id: 12,
        technical: false,
        title: "Adzap",
        discription:
          "* One team per department in a college  is allowed.\n* A team should be maximum 5+1 participants is allowed.\n* Duration should not exceed 5 minutes. \n* Topic will be given on the spot.\n* Judge decision will be the  final.\n",
      },
      {
        id: 13,
        technical: false,
        title: "Channel surfing",
        discription:
          "* Two teams per college is allowed\n* A team should be maximum 2+1 participants is allowed.\n * Topic will be given on the spot. \n* Judge decision will be the fin",
      },
      {
        id: 14,
        technical: false,
        title: "Drawing ",
        discription:
          "* Individual participation.\n* Two participants per department in a college.\n* Topic will be given on the spot. \n * Judge decision will be the final.\n * Required materials to be brought by the contestants.\n ",
      },
      {
        id: 15,
        technical: false,
        title: "Rangoli",
        discription:
          "* Two teams per college\n*  A team should be maximum 2 participants allowed.\n*  Duration should not exceed 130 minutes \n* Judge decision will be the final. ",
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
            <Route path="/ctf" element={<Ctf />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
