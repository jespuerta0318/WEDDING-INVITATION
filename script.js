const pages = document.querySelectorAll(".page");

/* PAGE REVEAL ON SCROLL */

function revealPage() {

const trigger = window.innerHeight * 0.85;

pages.forEach(page => {

const top = page.getBoundingClientRect().top;

if (top < trigger) {
page.classList.add("show");
}

});

}

window.addEventListener("scroll", revealPage);
revealPage();

/* PETALS */

const petalsContainer = document.querySelector(".petals");

for (let i = 0; i < 20; i++) {

let petal = document.createElement("span");

petal.style.left = Math.random() * 100 + "%";
petal.style.animationDuration = (8 + Math.random() * 6) + "s";
petal.style.animationDelay = Math.random() * 5 + "s";

petalsContainer.appendChild(petal);

}

/* LIGHTS */

const lightsContainer = document.querySelector(".lights");

for (let i = 0; i < 25; i++) {

let light = document.createElement("span");

light.style.left = Math.random() * 100 + "%";
light.style.top = Math.random() * 100 + "%";
light.style.animationDuration = (6 + Math.random() * 6) + "s";

lightsContainer.appendChild(light);

}

/* OPEN INVITATION + MUSIC */

const intro = document.getElementById("intro");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

openBtn.onclick = function () {

intro.classList.add("hide");

/* PLAY MUSIC */
music.play().catch(() => {});

/* CENTER FIRST PAGE */

setTimeout(() => {

document.querySelector(".first-page").scrollIntoView({
behavior: "smooth",
block: "center"
});

}, 800);

};

/* COUNTDOWN */

const weddingDate = new Date("April 10, 2026 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(function () {

const now = new Date().getTime();
const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdown.innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";

}, 1000);


