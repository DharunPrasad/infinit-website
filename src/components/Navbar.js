import { useState } from "react";
import logo from "../assets/main-logo.png";
import ModalContact from "./ModalContact";
import Timer from "./Timer";
const Navbar = () => {
  const [displayContact, setDisplayContact] = useState(false);
  return (
    <>
      <nav className="fixed w-full h-30 bg-gray-300 flex justify-between items-center text-black p-2 md:px-5 z-10">
        <div>
          <img src={logo} alt="" className="w-10 h-10" />
        </div>
        {/* <div className="flex items-center">
                <a href = "">
            <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg> </a>
            </div> */}
        <div className="mx-auto w-fit">
          {" "}
          <Timer />
        </div>
        <svg
        onClick={() => setDisplayContact(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 bg-gray-700 p-2 rounded cursor-pointer hover:scale-105 transform"
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
