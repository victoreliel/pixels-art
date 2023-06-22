function criarQuadro(n) {
  const tamanho = n;

  for (let index = 0; index < tamanho; index += 1) {
    const quadro = document.getElementById('pixel-board');
    const linha = document.createElement('div');
    quadro.appendChild(linha);

    for (let index2 = 0; index2 < tamanho; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      quadro.appendChild(pixel);
    }
  }
}

criarQuadro(5);

const paletaDeCores = document.getElementsByClassName('color');

function corInicial() {
  paletaDeCores[0].style.backgroundColor = 'black';
  paletaDeCores[0].classList.add('selected');
}

window.onload = corInicial;

function removeSelecao() {
  const corPixel = document.getElementsByClassName('color');
  for (let index = 0; index < corPixel.length; index += 1) {
    corPixel[index].classList.remove('selected');
  }
}

const corPixel = document.querySelector('section');

function adicionaSelecao(event) {
  removeSelecao();
  event.target.classList.add('selected');
}

corPixel.addEventListener('click', adicionaSelecao);

function paint() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      let cor = getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = cor;
    });
  }
}

paint();

function trocaCor() {
  const cores = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

trocaCor();

const botao = document.getElementById('clear-board');

function limparQuadro() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

botao.addEventListener('click', limparQuadro);