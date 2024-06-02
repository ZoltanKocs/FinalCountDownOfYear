 const dayEl = document.getElementById("day");
 const hourEl = document.getElementById("hour");
 const minutesEl = document.getElementById("minutes");
 const secondEl = document.getElementById("second");


const newYearDate = new Date("Jan 1,  2025 00:00:00").getTime();

finalCountDown();
function finalCountDown(){
    const now = new Date().getTime();
    const gap = newYearDate - now;
    //console.log(gap);

    const second = 1000;
    const minutes = second *60;
    const hour = minutes *60;
    const day = hour * 24;

    const remday = Math.floor(gap / day);
    const remHour = Math.floor((gap % day) / hour);
    const remMin =Math.floor((gap % hour) / minutes);    
    const remSec = Math.floor((gap % minutes) / second);


   dayEl.innerText = remday;
   hourEl.innerText = remHour;
   minutesEl.textContent = remMin;
   secondEl.textContent = remSec;
   setTimeout(finalCountDown,1000)

}