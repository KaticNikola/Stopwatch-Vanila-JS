var min = 0;
var sec = 0;
var ms = 0;
var timer ;
const stopwatch = document.querySelector('.stopwatch');
const lapsContainer = document.querySelector('.laps');
let startBtn = document.querySelector("#start");

function start(){
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run(){
    stopwatch.textContent = getTime();
    ms++;
    if (ms == 100) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }

}

function pause(){
    stopTimer()
    startBtn.textContent = "Continue"

}

function stop(){
    stopTimer();
    min = 0;
    sec = 0;
    ms = 0;
    stopwatch.textContent = getTime();
    startBtn.textContent = "Start"
}
function restart(){
    stop();
    start();
}
function lap(){
    if (timer) {
        let li = document.createElement("li");
        li.innerText = getTime();
        lapsContainer.appendChild(li);
    }
}
function reserLaps(){
    lapsContainer.innerHTML = "";
}


function stopTimer(){
    clearInterval(timer);
    timer = false;
}
function getTime(){
    return  (min < 10 ? "0" + min : min) + ":" +
    // dodaje 0 ako je vrednost jednocifrena  i
            (sec < 10 ? "0" + sec : sec) + ":" +
    // resava problem pomeranja levo desno
            (ms < 10 ? "0" + ms : ms);
}
