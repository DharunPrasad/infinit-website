const Modal = ({ setDisplayModal, filteredEvent }) => {
  // console.log(filteredEvent)

  const handleClick = () => {
    setDisplayModal(false);
    document.body.style.overflow = "visible";
  };
  return (
    <div className="">
      <div
        className="w-full h-screen fixed top-0 left-0 bg-gray-900 opacity-90 z-20"
        onClick={handleClick}
      ></div>
      <div className="w-10/12 h-4/5 md:w-8/12 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-20 overflow-hidden">
        <div className="h-full">
          <div className="w-full bg-gray-600 h-10 flex justify-between items-center relative z-10">
            <p className="text-sm p-2 text-white mt-auto">
              {filteredEvent && filteredEvent[0].title}
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
          <div className="px-2 pt-2 pb-20 overflow-auto h-full text-sm md:text:xs">
            {filteredEvent &&
              filteredEvent[0].discription
                .split("\n")
                .map((body, i) => <p key={i}>{body}</p>)}
          </div>
        </div>
        <a
          href=""
          target="_blank"
          className="fixed mt-10 bottom-0 right-5 bg-greenish mx-auto block w-10/12 sm:w-4/12 mb-2 text-center sm:mr-10 text-black p-2 rounded transform transition-all hover:scale-105"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Modal;
