import React from "react";
import { Link } from "react-router-dom";
import technical from "../assets/ti (1).png";
import nontechnical from "../assets/nti.png";

function EventMain() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 h-2/5 mx-auto text-sm">
      <Link
        to="/technical"
        className="transform hover:scale-105 hover:shadow-lg transition-all p-3"
      >
        <div className="text-center">
          <img src={technical} className="block h-24 w-24  mx-auto mb-3" />
          <p className="bg-green-300 text-black">Technical Events</p>
        </div>
      </Link>
      <Link
        to="./nonTechnical"
        className="transform hover:scale-105 hover:shadow-lg transition-all p-3"
      >
        <div className="flex flex-col  text-center">
          <img src={nontechnical} className="h-24 w-24  block mx-auto mb-3" />
          <p className="bg-green-300 text-black">Non-Technical Events</p>
        </div>
      </Link>
    </div>
  );
}

export default EventMain;
