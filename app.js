// MENU ☰
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// JAM DIGITAL
function updateJam() {
  const now = new Date();
  const jam = now.toLocaleTimeString();
  document.getElementById("jam").innerText = jam;
}
setInterval(updateJam, 1000);
updateJam();

// FAKTA
const faktaList = [
  "Otak manusia lebih aktif saat malam hari.",
  "Petir lebih panas dari permukaan matahari.",
  "Gurita punya tiga jantung.",
  "Pisang termasuk buah berry.",
  "Lebah bisa mengenali wajah manusia.",
  "Air panas bisa membeku lebih cepat dari air dingin."
];

document.getElementById("btnFakta").addEventListener("click", () => {
  const random = Math.floor(Math.random() * faktaList.length);
  document.getElementById("faktaBox").innerText = faktaList[random];
});