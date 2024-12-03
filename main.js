const tabuleiro = document.querySelector('.tabuleiro');
const scoreDisplay = document.getElementById('score');
document.getElementById('startButton').addEventListener('click', iniciarJogo);


const imagens = ['🎶', '👾', '👽', '👻', '💩', '🤖'];
let cartas = [...imagens, ...imagens];
let cartasSelecionadas = [];
let cartasBloqueadas = true;
let score = 0;
let chances = 3;

cartas.sort(() => Math.random() - 0.5);

function iniciarJogo() {
  const cartas = document.querySelectorAll('.carta');
  cartas.forEach(carta => carta.classList.add('flip'));

  setTimeout(() => {
    cartas.forEach(carta => carta.classList.remove('flip'));
    cartasBloqueadas = false;
  }, 2000);

  cartasBloqueadas = true;
  score = 0;
  chances = 3;
  atualizarPlacar();
}

cartas.forEach(imagem => {
  const carta = document.createElement('div');
  carta.classList.add('carta');
  carta.innerHTML = `
        <div class="carta-inner">
            <div class="frente">${imagem}</div>
            <div class="verso"></div>
        </div>
    `;
  tabuleiro.appendChild(carta);

  carta.addEventListener('click', () => {
    if (!carta.classList.contains('flip') && !cartasBloqueadas) {
      carta.classList.add('flip');
      cartasSelecionadas.push(carta);

      if (cartasSelecionadas.length === 2) {
        verificarPar();
      }
    }
  });
});

function verificarPar() {
  cartasBloqueadas = true;
  const [primeiraCarta, segundaCarta] = cartasSelecionadas;

  if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
    score += 3;
    resetarSelecao();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove('flip');
      segundaCarta.classList.remove('flip');
      score -= 2;
      chances--;
      resetarSelecao();
    }, 1000);
  }
}

function resetarSelecao() {
  cartasSelecionadas = [];
  cartasBloqueadas = false;
  score = Math.max(0, score);
  atualizarPlacar();

  if (chances === 0 || document.querySelectorAll('.carta:not(.flip)').length === 0) {
    setTimeout(() => alert(chances === 0 ? 'Você perdeu!' : 'Parabéns!'), 500);
    setTimeout(() => location.reload(), 1000);
  }
}

function atualizarPlacar() {
  scoreDisplay.textContent = `Pontuação: ${score} | Chances: ${chances}`;
}
