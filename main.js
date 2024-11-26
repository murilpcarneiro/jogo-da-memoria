document.addEventListener('DOMContentLoaded', function () {
  const carta = document.querySelectorAll('#carta');
  const carta1 = carta[0];
  const carta2 = carta[1];
  const carta3 = carta[2];
  const carta4 = carta[3];
  const carta5 = carta[4];
  const carta6 = carta[5];
  const carta7 = carta[6];
  const carta8 = carta[7];
  const carta9 = carta[8];
  const carta10 = carta[9];
  const carta11 = carta[10];
  const carta12 = carta[11];
  const cores = ['azul', 'verde', 'roxo', 'amarelo', 'marrom', 'ciano'];

  for (let i = 0; i < carta.length; i++) {
    const corIndex = Math.floor(Math.random(i / 2) % cores.length);
    carta[i].classList.add(cores[corIndex]);

    carta[i].addEventListener('click', function () {
      carta[i].classList.toggle('active');
    });
  }

});
