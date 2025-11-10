async function limparLista() {

  // 1. ESPERA o usuário responder
  const confirmUser = await alertCerteza();

  // 2. Se o usuário clicar "Não" → cancela
  if (!confirmUser) return;

  // 3. Se clicou "Sim" → limpa a lista
  document.querySelectorAll('li.newProd').forEach(item => item.remove());
  document.getElementById('ptotal').innerHTML = "Total : 0";

  // 4. Mostra alerta final
  alertListaVazia();
}