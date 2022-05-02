import { useState } from "react";
import logo from "../assets/main-logo.png";
import ModalContact from "./ModalContact";
import Timer from "./Timer";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [displayContact, setDisplayContact] = useState(false);
  return (
    <>
      <nav className="fixed w-full h-16 bg-gray-300 flex justify-between items-center text-black p-2 md:px-5 z-10">
        <div>
         <Link to = "/"><img src={logo} alt="" className="w-10 h-10" /></Link> 
        </div>
        <div className="mx-auto w-fit">
          <Timer />
        </div>
        <svg
        onClick={() => setDisplayContact(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 bg-primary p-2 rounded cursor-pointer hover:scale-105 transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        {displayContact && <ModalContact setDisplayContact = {setDisplayContact}/>}
      </nav>
    </>
  );
};

export default Navbar;
