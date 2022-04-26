import React from "react";
import { Link } from "react-router-dom";

function EventMain() {
  return (
    <div className="flex flex-col md:flex-row justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 h-2/5  mx-auto text-sm">
      <Link to="/technical">
        <div className="text-center ">
          <div>Logo</div>
          <p className="bg-green-300 text-black">Technical Events</p>
        </div>
      </Link>
      <div className="text-center">
        <div>Logo</div>
        <p className="bg-green-300 text-black">Non-Technical Events</p>
      </div>
    </div>
  );
}

export default EventMain;
