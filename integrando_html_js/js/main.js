const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (valorB > valorA) {
    mensagem.textContent = 'Formulário válido: Número B é maior que o número A.';
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = 'Formulário inválido: Número B deve ser maior que o número A.';
    mensagem.style.color = 'red';
  }
});