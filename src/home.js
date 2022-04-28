import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
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
      {displayBar && 
      <div>
      <img src={logo} alt="" className="w-4/5 mt-32 md:mt-10 md:w-2/5 h-auto block mx-auto " />
      <div className="my-10"></div>
      <ProgressBar now={nowValue}></ProgressBar>
      </div>
      }
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
