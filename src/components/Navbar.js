import logo from "../assets/main-logo.png"
const Navbar = () => {
    return ( 
        <>
        <nav className="h-30 bg-gray-300 flex justify-between text-black px-5">
            <div>
                <img src={logo} alt="" className="w-10 h-10"/>
            </div>
            <div className="flex items-center">
                <a href = "">
            <svg class="h-8 w-8 text-red-500 mr-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg> </a>
                <div>Timer</div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;