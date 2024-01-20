// Obtém todos os botões de contato pela classe
var botoesContato = document.getElementsByClassName('botaoContato');

// Adiciona o evento de clique a todos os botões
for (var i = 0; i < botoesContato.length; i++) {
  botoesContato[i].addEventListener('click', function () {
    // Obtém a referência à janela de contato
    var janelaContato = document.getElementById('janelaContato');

    // Alterna a visibilidade da janela de contato
    if (janelaContato.style.display === 'none') {
      janelaContato.style.display = 'block';
    } else {
      janelaContato.style.display = 'none';
    }
  });
}
