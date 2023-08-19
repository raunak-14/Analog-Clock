
// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// },1000);

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const startButton = document.getElementById("startButton");

let intervalId = null;

function startClock() {
    intervalId = setInterval(() => {
        const d = new Date();
        const htime = d.getHours();
        const mtime = d.getMinutes();
        const stime = d.getSeconds();
        const hrotation = 30 * htime + mtime / 2;
        const mrotation = 6 * mtime;
        const srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
}

startButton.addEventListener("click", () => {
    startClock();
    startButton.disabled = true; // Disable the button once the clock starts
});

// To start the clock automatically when the page loads, you can uncomment the following line:
// startClock();






