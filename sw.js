function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function add(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value =
      eval(document.getElementById("display").value);
  } catch {
    alert("Perhitungan salah");
  }
}