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

/* ===== KALKULATOR ===== */
let calc = "";

function press(val) {
  calc += val;
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
    alert("Perhitungan error");
  }
}