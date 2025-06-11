// Seleção dos elementos do DOM
const form = document.getElementById('formTroca');
const lista = document.getElementById('listaTrocas');

// Evento para adicionar uma troca à lista quando o formulário for enviado
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que o formulário recarregue a página

  // Coleta os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const local = document.getElementById('local').value;
  const oferece = document.getElementById('oferece').value;
  const procura = document.getElementById('procura').value;

  // Cria um novo item na lista
  const item = document.createElement('li');
  item.textContent = `${nome} (${local}) oferece: ${oferece} | procura: ${procura}`;
  
  // Adiciona o item à lista de trocas
  lista.appendChild(item);

  // Reseta os campos do formulário
  form.reset();
});
