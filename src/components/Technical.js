import Title from "./Title";
import technical from "../assets/technical.png";
import { useEffect } from "react";

const Technical = ({ events }) => {
  return (
    <div className="technical-event-page text-white relative">
      <Title title="Technical Events" />

      <div className="flex flex-col md:grid md:gap-20 md:grid-cols-2 md:auto-rows-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-8/12 h-fit mt-5 md:-mt-1 mx-auto text-sm">
        {events &&
          events.map((event) => (
            <div
              className="text-center cursor-pointer hover:shadow-md p-2 transform hover:scale-105 transition-all "
              key={event.id}
            >
              <img src={technical} alt="" className="block mx-auto" />
              <p className="bg-green-300 text-black ">{event.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Technical;
