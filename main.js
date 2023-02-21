const timeDisplay = document.querySelector('#timeDisplay');
const startBtn = document.querySelector('.timer_btn_start');
const pauseBtn = document.querySelector('.timer_btn_pause');
const resetBtn = document.querySelector('.timer_btn_reset');

let startTime = 0;
let elapsedTime =0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener('click', () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener ('click', () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    currentTime = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
})

function updateTime() {
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((currentTime / (1000 * 60) % 60));
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) & 60)

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function pad(unit) {
        return (("0") * unit).length > 2 ? unit : "0" + unit;
    }
}

const triangle = document.querySelector('.Triangle');
const circle = document.querySelector('.Circle');

let positionLeft = 0;
let positionRight = 0;
let positionBottom = 0;

const move = () => {
  if (positionLeft <= 400) {
    positionLeft += 16;
    circle.style.left = `${positionLeft}px`;
    setTimeout(move, 100);
  } else if (positionLeft >= 400 && positionRight <= 400) {
    positionRight += 16;
    circle.style.bottom = `${positionRight}px`;
    setTimeout(move, 100);
  }
};

move();

setTimeout(() => {
    console.log("1");
}, 1000);

setTimeout(() => {
    console.log("2");
}, 1000);









// var cnt = 0;
// var object = setInterval(timer, 1000)
//
// function timer() {
//     console.log(cnt)
//     cnt++;
//     if(cnt===60) {
//         clearInterval(object);
//     }
// }

