const secondHand = document.querySelector(".hand-seconds");
const minuteHand = document.querySelector(".hand-minutes");
const hourHand = document.querySelector(".hand-hours");

const timeSpan = document.querySelector(".time");

const clockFace = document.querySelector(".clock-face");
const clockRadius = 192;
for (let i = 0; i < 60; ++i) {
  const tick = document.createElement("div");
  tick.classList.add("tick");
  if (i % 5 == 0) tick.classList.add("tick-hour");

  tick.style.transform = `translate(-50%, -50%) rotate(${
    i * 6
  }deg) translateY(${clockRadius}px)`;

  clockFace.appendChild(tick);
}

for (let i = 1; i <= 12; ++i) {
  const number = document.createElement("div");
  number.classList.add("clock-number");
  number.classList.add("roboto-font");
  number.textContent = i;

  const angleRad = (3 - i) * 30 * (Math.PI / 180);
  const xPosition = `calc(50% + ${clockRadius - 24}px * ${Math.cos(angleRad)})`;
  const yPosition = `calc(50% - ${clockRadius - 24}px * ${Math.sin(angleRad)})`;
  number.style.left = xPosition;
  number.style.top = yPosition;

  clockFace.appendChild(number);
}

function setTime(secondHand, minuteHand, hourHand, timeSpan) {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const formatTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  document.title = formatTime;
  timeSpan.textContent = formatTime;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 3, 0.5, 1)";
  }

  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;

  const minutesDegrees = minutes * 6 + 90;
  minuteHand.style.transform = `translateY(-50%) rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `translateY(-50%) rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000, secondHand, minuteHand, hourHand, timeSpan);
