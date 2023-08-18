// Selecionando o botão "Send" pelo ID
const sendButton = document.getElementById('send-button');

// Função a ser chamada quando o botão "Send" é clicado
sendButton.onclick = () => {
  // Criando o elemento de imagem
  // Criando o elemento de parágrafo
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = 'mensagem enviada!';

  // Adicionando os elementos à página
  const sendDiv = document.getElementById('send');

  sendDiv.appendChild(paragraphElement);
};
