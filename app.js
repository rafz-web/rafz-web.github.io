const menu = document.getElementById("menu");
const pages = document.querySelectorAll(".page");

function toggleMenu() {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  menu.style.display = "none";
}

/* Kalkulator */
let calc = "";
function press(v) {
  calc += v;
  document.getElementById("calcDisplay").value = calc;
}
function clearCalc() {
  calc = "";
  document.getElementById("calcDisplay").value = "";
}
function calculate() {
  try {
    calc = eval(calc).toString();
    document.getElementById("calcDisplay").value = calc;
  } catch {
    alert("Error");
  }
}

/* Jam */
function clock() {
  document.getElementById("clock").innerText =
    "🕒 " + new Date().toLocaleTimeString("id-ID");
}
setInterval(clock, 1000);
clock();

/* Baterai */
if (navigator.getBattery) {
  navigator.getBattery().then(b => {
    function up() {
      document.getElementById("battery").innerText =
        "🔋 Baterai: " + Math.round(b.level * 100) + "%";
    }
    up();
    b.addEventListener("levelchange", up);
  });
}