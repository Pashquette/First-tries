'use strict';

const input = document.getElementById('input');
const blockTime = document.querySelector('.time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let interval;


blockTime.innerHTML = 0;
input.value = 0;

function substractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
    }
}

start.addEventListener('click', () => {
    blockTime.innerHTML = input.value;
    input.value = '';
    clearInterval(interval);
    interval = setInterval(substractTime, 1000);
});

stop.addEventListener('click', () =>  {
    clearInterval(interval);
    input.value = blockTime.innerHTML;
});

reset.addEventListener('click', () => {
    blockTime.innerHTML = 0;
    input.value = 0;
});