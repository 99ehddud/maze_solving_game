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
    resize_margin();
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

function make_board() {
    let table = document.createElement('table');
    table.id = 'maze';
    let tr, td;
    for (let i = 0; i < 15; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < 30; j++) {
            td = document.createElement('td');
            td.id = 'cell_' + (15 - i) + '_' + (j + 1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        document.querySelector('#play').appendChild(table);
    }
    document.querySelector('#maze').style.margin = (500 - document.querySelector('#maze').offsetHeight) / 2 + 'px auto';
    return "";
}

let record = [];
let current = {};
let isDuplicate;
let whereToGo = 0;
let c = 1;
let r = 1;
let isFirst = true;
let isGoal = false;
let tmp = 0;
function make_maze() {
    make_board();
    isFirst = true;

    while (!isGoal) {
        if (!isFirst) {
            whereToGo = Math.floor(Math.random() * 4);
            switch (whereToGo) {
                case 0:
                    if (r < 30) {
                        r++;
                    }
                    break;
                case 1:
                    if (r > 1) {
                        r--;
                    }
                    break;
                case 2:
                    if (c < 15) {
                        c++;
                    }
                    break;
                case 3:
                    if (c > 1) {
                        c--;
                    }
                    break;
            }
        }
        current[0] = c;
        current[1] = r;
        if (record.indexOf(current) == -1) {
            record.push(current);
            document.querySelector('#cell_' + r + '_' + c).style.border = '1px solid black';
        }
        
        if (isFirst) isFirst = false;
        if (c == 15 && r == 30) isGoal = true;
    }
}

function move() {
    count += 1;
    document.querySelector('#move').value = count;
}

// Prevent to scroll when user push arrow key
// Full-screen mode O -> screen
// Full-Screen mode X -> window