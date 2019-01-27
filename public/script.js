
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let canvas = document.getElementById('canvas');

document.getElementById('pausebtn').addEventListener("click", pauseAnimation);
document.getElementById('playbtn').addEventListener("click", playAnimation);

function pauseAnimation() {
    moon.style.webkitAnimationPlayState = "paused";
    sun.style.webkitAnimationPlayState = "paused";
    canvas.style.webkitAnimationPlayState = "paused";
}

function playAnimation() {
    moon.style.webkitAnimationPlayState = "running";
    sun.style.webkitAnimationPlayState = "running";
    canvas.style.webkitAnimationPlayState = "running";
}