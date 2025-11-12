let indice = 0;
const imagens = document.querySelectorAll(".imagens img");

function mudarImagem(direcao) {
  imagens[indice].classList.remove("ativo");
  indice += direcao;

  if (indice < 0) indice = imagens.length - 1;
  if (indice >= imagens.length) indice = 0;

  imagens[indice].classList.add("ativo");
}