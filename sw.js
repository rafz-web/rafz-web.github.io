// MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn) {
  menuBtn.onclick = () => {
    menu.classList.toggle("hidden");
  };
}

// JAM
const clock = document.getElementById("clock");
if (clock) {
  setInterval(() => {
    clock.innerText = new Date().toLocaleTimeString();
  }, 1000);
}

// KALKULATOR
let display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}