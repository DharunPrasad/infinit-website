const Modal = ({ setDisplayModal, filteredEvent }) => {
  // console.log(filteredEvent)
  return (
    <div className="">
      <div
        className="w-full h-screen fixed top-0 left-0 bg-gray-900 opacity-20"
        onClick={() => setDisplayModal(false)}
      ></div>
      <div className="w-10/12 h-3/5 md:w-6/12 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-20">
        <div className="w-full bg-gray-600 h-10 flex justify-between items-center">
          <p className="text-sm p-2 text-white mt-auto">
            {filteredEvent && filteredEvent[0].title}
          </p>
          <div onClick={() => setDisplayModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
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
        <p>{filteredEvent && filteredEvent[0].discription}</p>
      </div>
    </div>
  );
};

export default Modal;
