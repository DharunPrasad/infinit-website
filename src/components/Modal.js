const Modal = ({children}) => {
    return ( 
        <div className="">
            <div className="w-full h-screen absolute top-0 left-0 bg-gray-900 opacity-4"></div>
            <div className="w-10/12 h-3/5 md:w-6/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
                {children}
            </div>
        </div>
     );
}
 
export default Modal;