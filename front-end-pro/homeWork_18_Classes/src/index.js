import Time from "./Time";
import "./style.css";

const heading = document.getElementById("heading");
document
  .getElementById("set-timer")
  .addEventListener("click", countDownController);

function countDownController() {
  let input = document.getElementById("input").value;
  let seconds = input;

  const countdownTimer = setInterval(startTimer, 1000);

  function startTimer() {
    const days = Math.floor(seconds / 24 / 60 / 60);
    const hoursLeft = Math.floor(seconds - days * 86400);
    const hours = Math.floor(hoursLeft / 3600);
    const minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = seconds % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;
    }

    console.log(minutes + ":" + remainingSeconds);
    heading.innerHTML = minutes + ":" + remainingSeconds;

    if (seconds == 0) {
      clearInterval(countdownTimer);
      console.log("Time End");
      heading.innerHTML = "Time End";
    } else {
      seconds--;
    }
  }
}

//const timeToCountDown = 60;
//countDownController(timeToCountDown);

/////////////////////////////////////////

document.getElementById("set-time").addEventListener("click", getTime);

let callCounter = 0;
let start;

function getTime() {
  callCounter += 1;
  if (callCounter === 1) {
    start = new Time(Date.now());
    heading.innerHTML = "Enabled";
    console.log("Enabled");
  } else {
    let duration = Math.ceil((Date.now() - start.getStartTime()) / 1000);
    heading.innerHTML = `${duration} seconds have passed`;
    console.log(`${duration} seconds have passed`);
    start = new Time(Date.now());
  }
}
