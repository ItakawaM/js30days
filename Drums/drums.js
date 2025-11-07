function playSoundKeyboard(event) {
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  const key = document.querySelector(`.key[data-key="${event.code}"]`);
  if (!audio || !key) return;

  key.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();

  ```  setTimeout(() => key.classList.remove("playing"), 300);```;
}

function playSoundMouse(element) {
  const audio = document.querySelector(
    `audio[data-key="${element.dataset.key}"]`
  );
  if (!audio) return;

  element.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();

  ```  setTimeout(() => element.classList.remove("playing"), 300);```;
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", () => playSoundMouse(key)));
window.addEventListener("keydown", playSoundKeyboard);
