const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const likes = document.querySelector('.likes');
const form = document.getElementById('comment-form');
const list = document.getElementById('list');
const input = document.getElementById('comment-input');
let pauseCase = pause.textContent.includes('pause');
let playTimer;

function secondUp() {
    let second = parseInt(counter.textContent);
    ++second;
    counter.textContent = second;
}

function secondDown(){
    let second = parseInt(counter.textContent);
    --second;
    counter.textContent = second;
}

function workTimer() {
    playTimer = setInterval(secondUp, 1000);
}
workTimer();

function handlePause () {
    if (pauseCase) {
        pause.textContent = 'resume';
        pauseCase = !pauseCase;
        clearInterval(playTimer);
    }
    else {
        pause.textContent = 'pause';
        pauseCase = !pauseCase;
        workTimer();
    }
}

function handleLike() {
    const currentSec = counter.textContent;
    li = document.createElement('li');
    li.textContent = `${currentSec} has been liked 1 time`;
    console.log(li);
    likes.appendChild(li);
}

function handleComments(e){
    e.preventDefault();
    const p = document.createElement('p');
    p.textContent = input.value;
    list.appendChild(p);
}

pause.addEventListener('click', handlePause);
plus.addEventListener('click', secondUp);
minus.addEventListener('click', secondDown);
heart.addEventListener('click', handleLike);
form.addEventListener('submit', handleComments);