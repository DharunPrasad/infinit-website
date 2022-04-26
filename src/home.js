import React, { useEffect, useState } from "react";
import {ProgressBar } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./home.css";

function Home() {
  const [nowValue, setNowValue] = useState(10);
  const [displayBar, setDisplayBar] = useState(true);
  useEffect(() => {
    setTimeout(() => setNowValue(100), 500);
    setTimeout(() => setDisplayBar(false), 2000);
  }, []);

  return (
    <div className="home-page h-screen text-white">
      {displayBar && <ProgressBar now={nowValue}></ProgressBar>}
      {!displayBar && (
        <main className="">
          <Navbar/>
          <Title />
        </main>
      )}
    </div>
  );
}

export default Home;
