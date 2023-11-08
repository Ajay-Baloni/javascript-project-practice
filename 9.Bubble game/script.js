let timer = 60;
let score = 0;
let hitValue;

function makeBubble() {
  let bubble = "";

  for (let j = 0; j <= 167; j++) {
    let randomNumber = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector(".bpanel").innerHTML = bubble;
}

function timerCount() {
  let clearTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#tcount").textContent = timer;
    } else {
      clearInterval(clearTimer);
      document.querySelector(".bpanel").innerHTML = `<h1>Game Over!</h1>`;
    }
  }, 1000);
}

function hitNumber() {
  hitValue = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitValue;
}

function scoreCount() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector(".bpanel").addEventListener("click", function (details) {
  let bubbleNumber = Number(details.target.textContent);
  if (bubbleNumber === hitValue) {
    scoreCount();
    makeBubble();
    hitNumber();
  }
});

makeBubble();
hitNumber();
timerCount();
