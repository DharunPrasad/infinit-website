import React from "react";

function Ctf() {
  return (
    <div className="h-screen mt-5">
      <div className="flex flex-col sm:grid sm:gap-20 sm:grid-cols-2 sm:auto-rows-auto w-10/12 sm:w-8/12 h-fit mt-5 sm:-mt-1 mx-auto text-sm">
        <div
          className="text-center cursor-pointer hover:shadow-lg p-2 transform hover:scale-105 transition-all "
          //   key={event.id}
          //   onClick={() => handleClick(event.id)}
        >
          <img
            // src={event.logo}
            alt="tech-event"
            className="block mx-auto w-32 h-auto mb-3"
          />
          <p className="bg-green-300 text-black ">Title</p>
        </div>
      </div>
    </div>
  );
}

export default Ctf;
