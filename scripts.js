// Alternar modo claro/escuro
const dark = () => {
  document.body.classList.toggle("modo-claro");
};

// Navegação entre páginas
document.querySelectorAll("[data-pagina]").forEach(botao => {
  botao.addEventListener("click", () => {
    const alvo = botao.getAttribute("data-pagina");
    document.querySelectorAll(".pagina").forEach(p => p.classList.remove("ativa"));
    document.getElementById(alvo).classList.add("ativa");
  });
});

// Lista de fotos
const fotos = [
  
  "PISCINA SUJA.jpeg",
  "PISCINAIMUNDA.jpeg",
  "PISCINASUJA2.jpeg",
  "PISCINALIMPA.jpeg",
  "limpinha.jpg",
  "super limpa.jpg",
  "total limpa.jpg",
  "PISCINALIMPADEPOISDASSUJAS2.jpeg"
];

// Monta o carousel
const carousel = document.getElementById("carousel");
fotos.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Foto da piscina";
  img.addEventListener("click", () => {
    window.open(src, "_blank"); // abre em nova aba
  });
  carousel.appendChild(img);
});
