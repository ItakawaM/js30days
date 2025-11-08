const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
/* TODO: Change time of the Time span and the Page itself */
/* TODO: Make clock ticks with JS */

function setTime(secondHand, minuteHand, hourHand) {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 3, 0.5, 1)";
  }

  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = minutes * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000, secondHand, minuteHand, hourHand);
