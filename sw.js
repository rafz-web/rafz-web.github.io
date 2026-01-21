// MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.classList.toggle("hidden");
};

// JAM
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// FAKTA
const fakta = [
  "Otak manusia lebih aktif saat malam hari.",
  "Gurita punya tiga jantung.",
  "Madu tidak pernah basi.",
  "Kucing bisa mengenali suara pemiliknya.",
  "Indonesia punya lebih dari 17.000 pulau."
];

document.getElementById("btnFakta").onclick = () => {
  const random = Math.floor(Math.random() * fakta.length);
  document.getElementById("faktaBox").innerText = fakta[random];
};

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}