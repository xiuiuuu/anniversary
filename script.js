let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
    if (!state) {
        record.classList.add("on");
        toneArm.classList.add("play"); // Fixed syntax error
        setTimeout(() => {
            song.play();
        }, 1000);
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play"); // Fixed syntax error
        song.pause();
    }
    state = !state;
});

// Volume slider control (Fixed the logic)
slider.addEventListener("input", (e) => {
    song.volume = Number(e.target.value);
});
