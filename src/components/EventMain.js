import React from "react";

function EventMain() {
  return (
    <div className="flex flex-col md:flex-row justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 h-2/5 border mx-auto text-sm">
      <div className="text-center ">
        <div>Logo</div>
        <p className="bg-red-300 text-black">Technical Events</p>
      </div>
      <div className="text-center">
        <div>Logo</div>
        <p>Non-Technical Events</p>
      </div>
    </div>
  );
}

export default EventMain;
