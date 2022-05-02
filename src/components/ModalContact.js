const ModalContact = ({setDisplayContact}) => {
  
    const handleClick =() => {
        setDisplayContact(false)
    }
  
    return (
    <div className="">
      <div
        className="w-full h-screen fixed top-0 left-0 bg-gray-900 opacity-50 z-20"
        onClick={handleClick}
      ></div>
      <div className="w-10/12 h-4/5 md:w-8/12 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-20">
      <div className="w-full bg-gray-600 h-10 flex justify-between items-center">
          <p className="text-sm p-2 text-white mt-auto">
            Contact List
          </p>
          <div onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
       
        </div>
        <div className=" w-full md:text-sm text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans">
            <a href="https://wa.me/+918110938725" target = "_blank" className="text-black"><span className = "text-gray-600">President</span>   <br /> Matthew: +91 8110938725  <br /> <br /> <br/></a>
            <a href="https://wa.me/+919551074540 " target = "_blank" className="text-black"> Vice-President<br /> Akash : +91 9551074540  <br /> <br/></a>
            <a href="https://wa.me/+919566274508 " target = "_blank" className="text-black"> Cultural Secretary <br/>Praveen  : +91 9566274508 <br /> <br/></a>
            <a href="https://wa.me/+919962456236" target = "_blank" className="text-black"> Treasurer <br/> Suriya : +91 9962456236 <br /> <br/></a>
           
        </div>
        
      </div>
    </div>
  );
};

export default ModalContact;
