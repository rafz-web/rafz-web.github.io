function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (!menu) return;

  menu.style.left =
    menu.style.left === "0px" ? "-220px" : "0px";
}

/* ===== KALKULATOR ===== */
let display = null;
document.addEventListener("DOMContentLoaded", () => {
  display = document.getElementById("display");
});

function append(value) {
  if (display) display.value += value;
}

function clearDisplay() {
  if (display) display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}