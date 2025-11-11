// Light Switch Logic
const lightSwitch = document.querySelector(".light-switch");
const lightSwitchDongle = document.querySelector(".light-switch-dongle");
const lightSwitchString = document.querySelector(".light-switch-string");

const pullSFX = document.querySelector("#light-switch-pull-sfx");

let isDragging = false;
let startY = 0;
const pullThreshold = 300;

const root = document.documentElement;

// Day and Night Logic
const [dayBackground, nightBackground] = ["#fde1cc", "#272652"];
const [dayTextColor, nightTextColor] = ["#d85e5e", "#d7fff7"];
const [dayFavicon, nightFavicon] = ["./Assets/day.ico", "./Assets/night.ico"];
const cycleTexts = {
  day: [
    "The Sun is about 100 times wider than Earth and about 10 times wider than Jupiter, the biggest planet.",
    "The Sun is the only star in our solar system. It is the center of our solar system, and its gravity holds the solar system together. Everything in our solar system revolves around it – the planets, asteroids, comets, and tiny bits of space debris.",
    "The Sun doesn’t have moons, but it’s orbited by eight planets, at least five dwarf planets, tens of thousands of asteroids, and perhaps three trillion comets and icy bodies.",
    "Nothing could live on the Sun, but its energy is vital for most life on Earth.",
  ],

  night: [
    "If you set a single green pea next to a U.S. nickel, you'd have a pretty good idea of the size of the Moon compared to Earth.",
    "The Earth and Moon are tidally locked. Their rotations are so in sync we only see one side of the Moon. Humans didn't see the lunar far side until a Soviet spacecraft flew past in 1959.",
    "The Moon has no moons.",
    "More than 105 robotic spacecraft have been launched to explore the Moon. It is the only celestial body beyond Earth – so far – visited by human beings.",
  ],
};

const favicon = document.querySelector("link[rel='icon']");
const highlightText = document.querySelector("#highlight");
const text = document.querySelector(".text");

let currentCycle = "Day";

function dayNightCycle() {
  if (currentCycle === "Day") {
    currentCycle = "Night";

    root.style.setProperty(`--bg-color`, `${nightBackground}`);
    root.style.setProperty(`--text-color`, `${nightTextColor}`);

    document.title = "Night";
    favicon.href = nightFavicon;

    highlightText.textContent = "Night";
    text.textContent =
      cycleTexts.night[Math.floor(Math.random() * cycleTexts.night.length)];
  } else {
    currentCycle = "Day";

    root.style.setProperty(`--bg-color`, `${dayBackground}`);
    root.style.setProperty(`--text-color`, `${dayTextColor}`);

    document.title = "Day";
    favicon.href = dayFavicon;

    highlightText.textContent = "Day";
    text.textContent =
      cycleTexts.day[Math.floor(Math.random() * cycleTexts.day.length)];
  }
}

function startDrag(event) {
  isDragging = true;
  startY = event.clientY;

  // lightSwitch.style.animation = `none`;

  root.style.setProperty(`--active-cursor`, `grabbing`);
}

function drag(event) {
  if (!isDragging) return;

  const deltaY = event.clientY - startY;
  if (deltaY > 0) {
    root.style.setProperty(`--light-switch-len`, `calc(9rem + ${deltaY}px)`);
  }
}

function endDrag(event) {
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
  // lightSwitch.style.animation = `light-switch-sway 2.2s ease-in-out infinite alternate`;
}

lightSwitchDongle.addEventListener("mousedown", startDrag);
window.addEventListener("mousemove", drag);
window.addEventListener("mouseup", endDrag);

// TODO: Add settings menu?
