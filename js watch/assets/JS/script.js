const timeTable = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    timeStarted: false,
}

const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

const secondsDisplay = document.querySelector("#seconds");
const minutesDisplay = document.querySelector("#minutes");
const hoursDisplay = document.querySelector("#hours");

let intervalID;

startButton.addEventListener("click", ()=>{
    if (timeTable.timeStarted === false){
        intervalID = window.setInterval(startClock, 1000);
    }
});

stopButton.addEventListener("click", ()=>{
    if (timeTable.timeStarted === true){
        timeTable.timeStarted = false;
        window.clearInterval(intervalID);
    }
})

function startClock(){
    timeTable.timeStarted = true;
    timeTable.seconds += 1;
    secondsDisplay.innerHTML = timeTable.seconds;
    if (timeTable.seconds === 59){
        timeTable.seconds = 0;
        timeTable.minutes += 1;
        minutesDisplay.innerHTML = timeTable.minutes;
    } else if (timeTable.minutes === 59){
        timeTable.minutes = 0;
        timeTable.hours += 1;
        hoursDisplay.innerHTML = timeTable.hours;
    }
}

resetButton.addEventListener("click", ()=> {
    resetClock();
})

function resetClock(){
    timeTable.timeStarted = false;
    timeTable.seconds = 0;
    timeTable.minutes = 0;
    timeTable.hours = 0;
    secondsDisplay.innerHTML = timeTable.seconds;
    minutesDisplay.innerHTML = timeTable.minutes;
    hoursDisplay.innerHTML = timeTable.hours;
}