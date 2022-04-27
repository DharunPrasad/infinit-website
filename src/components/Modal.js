const Modal = ({children, setDisplayModal, filteredEvent}) => {
    // console.log(filteredEvent)
    return ( 
        <div className="">
            <div className="w-full h-screen absolute top-0 left-0 bg-gray-900 opacity-4" onClick={() => setDisplayModal(false)}></div>
            <div className="w-10/12 h-3/5 md:w-6/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
                <p>{filteredEvent && filteredEvent[0].discription}</p>
                
            </div>
        </div>
     );
}
 
export default Modal;