
const products = [
  {name:"IGNITE V80 ULTRA SLIM", brand:"Ignite", info:"Linha compacta • consulte variações", grad:"linear-gradient(160deg,#101927,#205fa9,#5bdcff)"},
  {name:"IGNITE V155 SLIM", brand:"Ignite", info:"Design slim • consulte variações", grad:"linear-gradient(160deg,#15151d,#4630a5,#4faeff)"},
  {name:"IGNITE V250", brand:"Ignite", info:"Linha V Series • consulte variações", grad:"linear-gradient(160deg,#191e2b,#b03b76,#ffb64e)"},
  {name:"IGNITE V300 ULTRA SLIM", brand:"Ignite", info:"Ultra slim • consulte variações", grad:"linear-gradient(160deg,#111b30,#164b92,#40d8f0)"},
  {name:"ELFBAR BC SERIES", brand:"Elfbar", info:"Linha BC • consulte modelos", grad:"linear-gradient(160deg,#1a1727,#8646dd,#4de1ff)"},
  {name:"ELFBAR ICE SERIES", brand:"Elfbar", info:"Linha Ice • consulte modelos", grad:"linear-gradient(160deg,#0d2031,#007fa7,#7be8ff)"},
  {name:"GEEK BAR SERIES", brand:"Geek Bar", info:"Linha Geek Bar • consulte modelos", grad:"linear-gradient(160deg,#1a1730,#cf385c,#ff9d43)"},
  {name:"BLACK SHEEP SERIES", brand:"Outros", info:"Linha selecionada • consulte modelos", grad:"linear-gradient(160deg,#202020,#454545,#a3b7cd)"}
];

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
let activeFilter = "Todos";

function render(){
  const term = search.value.trim().toLowerCase();
  const filtered = products.filter(p => 
    (activeFilter === "Todos" || p.brand === activeFilter) &&
    (p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term))
  );
  grid.innerHTML = filtered.length ? filtered.map(p => `
    <article class="product">
      <div class="product-art">
        <span class="tag">${p.brand.toUpperCase()}</span>
        <div class="product-bottle" style="--grad:${p.grad}">${p.brand.toUpperCase()}</div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.info}</p>
        <div class="product-meta">
          <span class="available">● Catálogo ativo</span>
          <span class="details">Informações</span>
        </div>
      </div>
    </article>
  `).join("") : `<p style="color:#8ea0b9">Nenhum item encontrado.</p>`;
}
document.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); activeFilter = btn.dataset.filter; render();
}));
search.addEventListener("input", render);
render();

const ageGate = document.getElementById("ageGate");
if(localStorage.getItem("ip_age_ok")==="yes") ageGate.classList.add("hidden");
document.getElementById("confirmAge").onclick = () => {
  localStorage.setItem("ip_age_ok","yes"); ageGate.classList.add("hidden");
};
document.getElementById("leaveSite").onclick = () => { window.location.href = "https://www.google.com/"; };
