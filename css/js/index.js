
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log ('hour :  ' + hr + ' Minute :  ' +  min + ' Second :' + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

//creating a function to making the clock dynamic and not static

function runTheClock(){

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    
    HOURHAND.style.transform = 'rotate('+ hrPosition + 'deg)';
    MINUTEHAND.style.transform = 'rotate('+ minPosition + 'deg)';
    SECONDHAND.style.transform = 'rotate('+ secPosition + 'deg)';
}

let interval = setInterval(runTheClock, 1000) //this calls the clock&date every second

    



