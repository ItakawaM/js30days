// Light Switch Logic
const lightSwitch = document.querySelector(".light-switch");
const lightSwitchDongle = document.querySelector(".light-switch-dongle");
const lightSwitchString = document.querySelector(".light-switch-string");

const pullSFX = document.querySelector("#light-switch-pull-sfx");

let isDragging = false;
let startY = 0;
const pullThreshold = 250;

const root = document.documentElement;

// Day and Night Logic
const [dayBackground, nightBackground] = ["#fde1cc", "#272652"];
const [dayTextColor, nightTextColor] = ["#d85e5e", "#d7fff7"];
const [dayFavicon, nightFavicon] = ["./Assets/day.ico", "./Assets/night.ico"];

const favicon = document.querySelector("link[rel='icon']");
const highlightText = document.querySelector("#highlight");
const text = document.querySelector(".text");

let currentCycle = "Day";

const apiURL = new URL("https://uselessfacts.jsph.pl/api/v2/facts/random");
async function getFunFact(params) {
  apiURL.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Fetch error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.text.toString() || `Nothing fun today!`;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function dayNightCycle() {
  if (currentCycle === "Day") {
    currentCycle = "Night";

    root.style.setProperty(`--bg-color`, `${nightBackground}`);
    root.style.setProperty(`--text-color`, `${nightTextColor}`);

    document.title = "Night";
    favicon.href = nightFavicon;

    highlightText.textContent = "Night";
  } else {
    currentCycle = "Day";

    root.style.setProperty(`--bg-color`, `${dayBackground}`);
    root.style.setProperty(`--text-color`, `${dayTextColor}`);

    document.title = "Day";
    favicon.href = dayFavicon;

    highlightText.textContent = "Day";
  }

  text.textContent = await getFunFact({ language: "en" });
}

// Mouse
function startDragMouse(event) {
  isDragging = true;
  startY = event.clientY;

  root.style.setProperty(`--active-cursor`, `grabbing`);
}

function dragMouse(event) {
  if (!isDragging) return;

  const deltaY = event.clientY - startY;
  if (deltaY > 0) {
    root.style.setProperty(`--light-switch-len`, `calc(9rem + ${deltaY}px)`);
  }
}

function endDragMouse(event) {
  if (!isDragging) return;

  isDragging = false;
  root.style.setProperty(`--active-cursor`, `default`);

  const deltaY = event.clientY - startY;
  if (deltaY > pullThreshold) {
    pullSFX.currentTime = 0;
    pullSFX.play();

    dayNightCycle();
  }

  root.style.setProperty(`--light-switch-len`, `9rem`);
}

// Touch
function startDragTouch(event) {
  event.preventDefault();

  isDragging = true;
  startY = event.touches[0].clientY;
}

function dragTouch(event) {
  if (!isDragging) return;

  const deltaY = event.touches[0].clientY - startY;
  if (deltaY > 0) {
    root.style.setProperty(`--light-switch-len`, `calc(9rem + ${deltaY}px)`);
  }
}

function endDragTouch(event) {
  if (!isDragging) return;

  isDragging = false;

  const deltaY = event.changedTouches[0].clientY - startY;
  if (deltaY > pullThreshold) {
    pullSFX.currentTime = 0;
    pullSFX.play();

    dayNightCycle();
  }

  root.style.setProperty(`--light-switch-len`, `9rem`);
}

// Events
lightSwitchDongle.addEventListener("mousedown", startDragMouse);
window.addEventListener("mousemove", dragMouse);
window.addEventListener("mouseup", endDragMouse);

lightSwitchDongle.addEventListener("touchstart", startDragTouch, {
  passive: false,
});
window.addEventListener("touchmove", dragTouch, { passive: false });
window.addEventListener("touchend", endDragTouch);
