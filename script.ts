// let testCount: number = 0;

const background: HTMLElement = document.getElementById("background");
const ball: HTMLElement = document.getElementById("ball");
const ballContent: HTMLElement = document.getElementById("ballContent");
const message: HTMLElement = document.getElementById("message");
const text: HTMLSpanElement = document.getElementById("text");

const shakeBtn: HTMLElement = document.getElementById("shake");

const response: string[] = [
  "IT IS\nCERTAIN",
  "IT IS\nDECIDEDLY\nSO",
  "WITHOUT\nA\nDOUBT",
  "YES\nDEFINITELY",
  "YOU MAY\nRELY ON\nIT",
  "AS I\nSEE IT,\nYES",
  "MOST\nLIKELY",
  "OUTLOOK\nGOOD",
  "YES",
  "SIGNS\nPOINT TO\nYES",
  "REPLY HAZY,\nTRY\nAGAIN",
  "ASK\nAGAIN\nLATER",
  "BETTER NOT\nTELL YOU\nNOW",
  "CANNOT\nPREDICT\nNOW",
  "CONCENTRATE\nAND ASK\nAGAIN",
  "DON'T\nCOUNT ON\nIT",
  "MY REPLY\nIS NO",
  "MY SOURCES\nSAY NO",
  "OUTLOOK\nNOT SO\nGOOD",
  "VERY\nDOUBTFUL",
];

let frontIsCurrent = true;

// shakeBtn.addEventListener("click", btnTest);
ball.addEventListener("click", mainAction);

function randomResponse() {
  const choice = Math.floor(Math.random() * 20);
  return response[choice];
}

function beginAnimation() {
  background.style.animation = "begin-background 4s ease forwards";
  ballContent.style.animation = "begin-ball 4s ease forwards";
  message.style.animation = "begin-message 4s ease forwards";
  text.style.animation = "begin-text 4s ease forwards";
  frontIsCurrent = false;
}

function resetAnimation() {
  background.style.animation = "begin-background 2s ease reverse forwards";
  ballContent.style.animation = "begin-ball 2s ease reverse forwards";
  message.style.animation = "begin-message 2s ease reverse forwards";
  text.style.animation = "begin-text 2s ease reverse forwards";
  frontIsCurrent = true;
}

function mainAction() {
  if (frontIsCurrent) {
    text.innerText = randomResponse();
    beginAnimation();
  } else {
    resetAnimation();
    // text.innerText = randomResponse();
    // beginAnimation();
  }
}
