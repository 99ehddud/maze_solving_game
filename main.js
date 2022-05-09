let count = 0;

let isStart = false;

function adjust_size() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const mainbox = document.querySelector('#mainbox');
    const menubar = document.querySelector('#menubar');
    const play = document.querySelector('#play');
    const status = document.querySelector('#status');

    const x_tap_status_height = screen.height - (window.outerHeight - window.innerHeight);

    header.style.width = screen.width + 'px';
    header.style.height = (x_tap_status_height * 0.1) + 'px';
    // main.style.width = screen.width + 'px';
    // main.style.height = (x_tap_status_height * 0.85) + 'px';
    mainbox.style.width = (screen.width * 0.6) + 'px';
    mainbox.style.height = (x_tap_status_height * 0.9) + 'px';
    menubar.style.width = (screen.width * 0.6) + 'px';
    menubar.style.height = (mainbox.offsetHeight * 0.15) + 'px';
    play.style.width = (screen.width * 0.6) + 'px';
    play.style.height = (mainbox.offsetHeight * 0.7) + 'px';
    status.style.width = (screen.width * 0.6) + 'px';
    status.style.height = (mainbox.offsetHeight * 0.15) + 'px';
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