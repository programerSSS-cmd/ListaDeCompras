function limparLista() {
  // Seleciona todos os <li> com a classe 'newProd'
  const itens = document.querySelectorAll('li.newProd');

  // Remove cada item encontrado
  itens.forEach(item => item.remove());

  // Opcional: limpar o total também, se desejar
  const tot = document.getElementById('ptotal');
  if (tot) {
    tot.innerHTML = "Total : 0";
  }
}