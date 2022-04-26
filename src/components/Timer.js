const Timer = () => {
    //Implimenting count down
const countDown = () => {

    
    const countDate = new Date("Nov 21, 2021 10:00:00").getTime();
    const now = new Date().getTime();
    const timeGap = countDate - now;
  
    //Calculatin the time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    //calculatin the timeGap to display
    const dayTimer = Math.floor(timeGap / day);
    const hourTimer = Math.floor((timeGap % day) / hour);
    const minuteTimer = Math.floor((timeGap % hour) / minute);
    const secondTimer = Math.floor((timeGap % minute) / second);
  
    //Displaying the UI
    daysEl.textContent = `${dayTimer}`.padStart(2, 0);
    hoursEl.textContent = `${hourTimer}`.padStart(2, 0);
    minutesEl.textContent = `${minuteTimer}`.padStart(2, 0);
    secondsEL.textContent = `${secondTimer}`.padStart(2, 0);
  };
  
  countDown();
  setInterval(function () {
    countDown();
  }, 1000);
    
    return ( 
       <>

        </>
     );
}
 
export default Timer;