const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const noBtn = document.getElementById("noBtn");
const rsvpMessage = document.getElementById("rsvpMessage");

const heartsContainer = document.getElementById("heartsContainer");
const sparklesContainer = document.getElementById("sparklesContainer");

const targetDate = new Date("April 25, 2026 17:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

if (yesBtn && rsvpMessage) {
  yesBtn.addEventListener("click", () => {
    rsvpMessage.innerHTML = "Yay! Thank you — I can't wait to celebrate with you 💖";
  });
}

if (maybeBtn && rsvpMessage) {
  maybeBtn.addEventListener("click", () => {
    rsvpMessage.innerHTML = "No worries — I hope you can make it ✨";
  });
}

if (noBtn && rsvpMessage) {
  noBtn.addEventListener("click", () => {
    rsvpMessage.innerHTML = "You’ll be missed, but thank you for your wishes 💕";
  });
}

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 18 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

function createSparkle() {
  if (!sparklesContainer) return;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.innerHTML = "✨";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.fontSize = 12 + Math.random() * 14 + "px";
  sparkle.style.animationDuration = 5 + Math.random() * 4 + "s";

  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 9000);
}

setInterval(createHeart, 500);
setInterval(createSparkle, 700);
