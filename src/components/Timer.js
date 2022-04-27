import { useState } from "react";

const Timer = () => {
  const [dayView, setDay] = useState()  
console.log(dayView)
    
    //Implimenting count down
const countDown = () => {

    const countDate = new Date("May 20, 2022 10:00:00").getTime();
    const now = new Date().getTime();
    const timeGap = countDate - now;
  
    //Calculatin the time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    //calculatin the timeGap to display
    const dayTimer = Math.floor(timeGap / day);
    // const hourTimer = Math.floor((timeGap % day) / hour);
    // const minuteTimer = Math.floor((timeGap % hour) / minute);
    // const secondTimer = Math.floor((timeGap % minute) / second);
  
    //Displaying the UI
    const daysEl = `${dayTimer}`.padStart(2, 0);
    return daysEl
  };
  
  countDown();
  setInterval(function () {
     setDay(countDown());
  }, 1000);
    
    return ( 
       <>
        <p className="text-xs h-30">{dayView} days to go !!</p>
        </>
     );
}
 
export default Timer;