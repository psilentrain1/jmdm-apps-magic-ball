const root: HTMLElement = document.documentElement;
const background: HTMLElement = document.getElementById("background");
const ball: HTMLElement = document.getElementById("ball");
const ballContent: HTMLElement = document.getElementById("ballContent");
const message: HTMLElement = document.getElementById("message");
const text: HTMLSpanElement = document.getElementById("text");

const btnReset: HTMLElement = document.getElementById("btn-reset");
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

ball.addEventListener("click", mainAction);
btnReset.addEventListener("click", resetAnimation);

function randomResponse() {
  const choice = Math.floor(Math.random() * 20);
  return response[choice];
}

function beginAnimation() {
  root.style.setProperty("--rand-rotate", (Math.floor(Math.random() * 21) - 10).toString() + "deg");
  background.style.animation = "begin-background 4s ease forwards";
  ball.style.animation = "begin-shake 4s linear forwards";
  ballContent.style.animation = "begin-ball 4s ease forwards";
  message.style.animation = "begin-message 4s ease forwards";
  text.style.animation = "begin-text 4s ease forwards";
  frontIsCurrent = false;
  btnReset.style.visibility = "visible";
  ball.style.cursor = "default";
}

function resetAnimation() {
  frontIsCurrent = true;
  btnReset.style.visibility = "hidden";
  background.removeAttribute("style");
  ballContent.removeAttribute("style");
  message.removeAttribute("style");
  text.removeAttribute("style");
  ball.removeAttribute("style");
}

function mainAction() {
  if (frontIsCurrent) {
    text.innerText = randomResponse();
    beginAnimation();
  } else {
    return;
  }
}
