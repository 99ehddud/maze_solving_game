let count = 0;

let isStart = false;
let isOver = false;

function resize_margin() {
    if (window.innerHeight >= 700) {
        isOver = true;
    } else {
        isOver = false;
    }
    if (isOver) {
        document.querySelector('#mainbox').style.margin = (window.innerHeight - 700) / 2 + 'px auto';
    }
}

const time = document.querySelector('#time');
let hour = 0, minute = 0, second = 0;
let elapse_time;

function start() {
    count = 0, hour = 0, minute = 0, second = 0;
    isStart = true;
    document.querySelector('#start').style.visibility = 'hidden';
    make_maze();
    
    elapse_time = setInterval(timer, 1000);
}

function timer() {
    second++;

    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        minute = 0;
        hour++;
    }

    if (second < 10) second = '0' + second.toString();
    if (minute < 10) minute = '0' + minute.toString();
    if (hour < 10) hour = '0' + hour.toString();

    document.querySelector('#time').value = hour + " : " + minute + " : " + second;

    if (second < 10) second = Number(second);
    if (minute < 10) minute = Number(minute);
    if (hour < 10) hour = Number(hour);
}

function make_maze() {
    make_board();
}

function make_board() {
    
}

function move() {
    count += 1;
    document.querySelector('#move').value = count;
}

// Prevent to scroll when user push arrow key
// Full-screen mode O -> screen
// Full-Screen mode X -> window