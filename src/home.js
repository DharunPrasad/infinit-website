import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Title from "./components/Title";
import EventMain from "./components/EventMain";
import "./home.css";
import logo from "./assets/logo.png";

function Home() {
  const [nowValue, setNowValue] = useState(5);
  const [displayBar, setDisplayBar] = useState(true);
  useEffect(() => {
    setTimeout(() => setNowValue(100), 500);
    setTimeout(() => setDisplayBar(false), 2000);
  }, []);

  return (
    <div className="h-screen text-white">
      {displayBar && <ProgressBar now={nowValue}></ProgressBar>}
      {!displayBar && (
        <main className="">
          {/* <Title title = "InfinIt"/> */}
          <img src={logo} className="w-80 block mx-auto  " />

          <EventMain />
        </main>
      )}
    </div>
  );
}

export default Home;
