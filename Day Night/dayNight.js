const dongle = document.querySelector(".dongle-dong");

const favicon = document.querySelector("link[rel~='icon']");

const text = document.querySelector(".text");
const highlight = document.querySelector(".highlight");
const funFact = document.querySelector(".fun-fact");

const dayBackground = "#fde1cc";
const nightBackground = "#272652";

const dayTextColor = "#d85e5e";
const nightTextColor = "#d7fff7";

const dayFavicon = "./Assets/day.ico";
const nightFavicon = "./Assets/night.ico";

const donglePullSfx = document.querySelector("#dongle-pull-sfx");

const dayText =
  "Our Sun is a 4.5 billion-year-old yellow dwarf star - a hot glowing ball of hydrogen and helium - at the center of our solar system. It's about 93 million miles (150 million kilometers) from Earth and it's our solar system's only star. Without the Sun's energy, life as we know it could not exist on our home planet.";
const nightText =
  "Earth's Moon records evidence of our solar system's history in the form of impact craters, cooled lava landforms, ancient ice deposits, and more.";

let currentCycle = "Day";

function dayNightCycle() {
  donglePullSfx.currentTime = 0;
  donglePullSfx.play();
  if (currentCycle === "Day") {
    document.title = "Night";
    document.documentElement.style.setProperty(
      `--current-bg`,
      `${nightBackground}`
    );
    document.documentElement.style.setProperty(
      `--current-text-color`,
      `${nightTextColor}`
    );
    highlight.textContent = "Night";
    favicon.href = nightFavicon;
    funFact.textContent = nightText;

    currentCycle = "Night";
  } else {
    document.title = "Day";
    document.documentElement.style.setProperty(
      `--current-bg`,
      `${dayBackground}`
    );
    document.documentElement.style.setProperty(
      `--current-text-color`,
      `${dayTextColor}`
    );
    highlight.textContent = "Day";
    favicon.href = dayFavicon;
    funFact.textContent = dayText;

    currentCycle = "Day";
  }
}

dongle.addEventListener("click", dayNightCycle);
