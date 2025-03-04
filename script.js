let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (!state) {
    record.classList.add("on"); // Start record spinning
    toneArm.classList.add("play"); // Move tone-arm onto record
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on"); // Stop spinning
    toneArm.classList.remove("play"); // Move tone-arm back
    song.pause();
  }
  state = !state;
});

// Volume control
slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});
