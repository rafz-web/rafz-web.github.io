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

/* Theme */
function switchTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
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

/* Kalkulator */
let calc = "";
function press(v){ calc+=v; calcDisplay.value=calc; }
function clearCalc(){ calc=""; calcDisplay.value=""; }
function calculate(){
  try{ calc=eval(calc).toString(); calcDisplay.value=calc; }
  catch{ alert("Error"); }
}

/* 100 FAKTA */
const facts = [];
for(let i=1;i<=100;i++){
  facts.push("Fakta ke-"+i+": Dunia menyimpan banyak hal menarik untuk dipelajari.");
}

const factsList = document.getElementById("factsList");
facts.forEach(f=>{
  const div=document.createElement("div");
  div.className="fact-card";
  div.innerText=f;
  factsList.appendChild(div);
});