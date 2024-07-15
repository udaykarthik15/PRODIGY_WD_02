let timer; // To store setInterval() object
let running = false;
let seconds = 0, minutes = 0, hours = 0, milliseconds = 0;

function startPause() {
    if (!running) {
        timer = setInterval(updateDisplay, 10); // Update display every 10 milliseconds (0.01 second)
        document.getElementById("startPause").textContent = "Pause";
    } else {
        clearInterval(timer);
        document.getElementById("startPause").textContent = "Resume";
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    milliseconds = 0;
    updateDisplay(); // Update display to reset to "00:00:00.000"
    document.getElementById("startPause").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    let displayString = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + "<span id='milliseconds'>" +
        (milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds) +
        "</span>";
    document.getElementById("display").innerHTML = displayString;
}

document.getElementById("startPause").addEventListener("click", startPause);
document.getElementById("reset").addEventListener("click", reset);
