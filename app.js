const menu=document.getElementById("menu");
function toggleMenu(){
  menu.classList.toggle("active");
}
function openPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  menu.classList.remove("active");
  window.scrollTo(0,0);
}

/* FAKTA */
const data={
  dunia:[
    "Antartika adalah gurun terbesar di dunia.",
    "Indonesia punya lebih dari 17.000 pulau."
  ],
  sains:[
    "Tubuh manusia bersinar sangat redup.",
    "Otak manusia menghasilkan listrik."
  ],
  tech:[
    "Internet awalnya dibuat untuk militer.",
    "HP sekarang lebih kuat dari komputer NASA lama."
  ],
  tubuh:[
    "Jantung berdetak sekitar 100.000 kali sehari.",
    "Kulit adalah organ terbesar manusia."
  ],
  angkasa:[
    "Di luar angkasa tidak ada suara.",
    "Matahari bisa memuat 1 juta bumi."
  ]
};

function loadFacts(cat){
  const box=document.getElementById("factList");
  box.innerHTML="";
  data[cat].forEach(f=>{
    const d=document.createElement("div");
    d.className="card";
    d.innerText=f;
    box.appendChild(d);
  });
}

/* KALKULATOR */
let r=document.getElementById("res");
function add(v){r.value+=v}
function calc(){try{r.value=eval(r.value)}catch{r.value="Error"}}
function clr(){r.value=""}