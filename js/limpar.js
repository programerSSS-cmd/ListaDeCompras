function limparLista() {
  // Seleciona todos os <li> com a classe 'newProd'
  const itens = document.querySelectorAll('li.newProd');

  // Remove cada item encontrado
  itens.forEach(item => item.remove());

  // Limpa o total também
  const tot = document.getElementById('ptotal');
  if (tot) {
    tot.innerHTML = "Total : 0";
  }

  // 🔔 Mostra o alerta informando que a lista foi limpa
  alertListaVazia();
}
