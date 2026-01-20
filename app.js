// SIDEBAR
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
let open = false;

menuBtn.onclick = () => {
  open = !open;
  sidebar.style.left = open ? "0" : "-200px";
};

// JAM DIGITAL
function updateClock(){
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock,1000);
updateClock();

// DATA FAKTA
const fakta = {
  dunia:[
    "Antartika adalah gurun terbesar.",
    "Indonesia punya 17.000+ pulau."
  ],
  sains:[
    "Otak manusia punya 86 miliar neuron.",
    "Tubuh manusia 60% air."
  ],
  tech:[
    "Smartphone lebih kuat dari komputer NASA 1969.",
    "Internet awalnya proyek militer."
  ],
  tubuh:[
    "Jantung berdetak 100 ribu kali per hari.",
    "Kulit adalah organ terbesar."
  ],
  angkasa:[
    "Tidak ada suara di luar angkasa.",
    "Cahaya matahari butuh 8 menit ke bumi."
  ]
};

function tampilkanFakta(){
  const kategori = document.getElementById("kategori").value;
  let list = [];

  if(kategori === "acak"){
    Object.values(fakta).forEach(a => list = list.concat(a));
  } else {
    list = fakta[kategori];
  }

  const random = list[Math.floor(Math.random()*list.length)];
  document.getElementById("hasil").innerText = random;
}