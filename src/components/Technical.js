import Title from "./Title";
import technical from "../assets/technical.png";
import Modal from "./Modal";
import { useState } from "react";

const Technical = ({ events }) => {
  const[filteredEvent, setFilteredEvent] = useState("")
  const [displayModal, setDisplayModal] = useState(false)

  const handleClick = (id) => {
    console.log(id);
    const filter = events.filter(event => event.id === id);
    setFilteredEvent(filter)
    setDisplayModal(true)
  }
  console.log(filteredEvent)

  return (
    <div className="technical-event-page text-white relative h-fit">
      <Title title="Technical Events" />

      <div className="flex flex-col md:grid md:gap-20 md:grid-cols-2 md:auto-rows-auto w-10/12 md:w-8/12 h-fit mt-5 md:-mt-1 mx-auto text-sm">
        {events &&
          events.map((event) => (
            <div
              className="text-center cursor-pointer hover:shadow-md p-2 transform hover:scale-105 transition-all "
              key={event.id} onClick = {() => handleClick(event.id)}
            >
              <img src={technical} alt="" className="block mx-auto" />
              <p className="bg-green-300 text-black ">{event.title}</p>
            </div>
          ))}
      </div>
      {displayModal &&
       <Modal setDisplayModal = {setDisplayModal} filteredEvent = {filteredEvent}/>}
    </div>
  );
};

export default Technical;
