let countDownDate = new Date("May 14, 2024 10:00:00").getTime();

let x = setInterval(function() {

let now = new Date().getTime();

let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("eventCountdownDay").innerHTML = days.toString().padStart(2,0);
document.getElementById("eventCountdownHour").innerHTML = hours.toString().padStart(2,0);
document.getElementById("eventCountdownMinute").innerHTML = minutes.toString().padStart(2,0);
document.getElementById("eventCountdownSecond").innerHTML = seconds.toString().padStart(2,0);

if (distance < 0) {
    clearInterval(x);
    document.getElementById("eventCountdownTitle").innerHTML = "Etkinlik Başladı!";
    document.getElementById("eventCountdown").classList.add("hidden");
}
}, 1000);