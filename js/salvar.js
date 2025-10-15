let salvar = document.getElementById('salvar');
salvar.addEventListener('click', function salvar() {
    const lista = document.getElementById('lista');

    if (lista.childElementCount === 0) {
        alert('Nada encontrado para salvarmos ...');
        return;
    }

    // Clona a lista para não alterar a original
    const clone = lista.cloneNode(true);

    // Percorre todos os inputs dentro da lista clonada
    clone.querySelectorAll('input').forEach(input => {
        // Atualiza o atributo 'value' com o valor atual do campo
        input.setAttribute('value', input.value);
    });

    // Agora o clone tem os valores preenchidos corretamente
    const html = clone.innerHTML;

    // Cria o arquivo Blob com o HTML completo
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });

    // Cria o link para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'lista-produtos.html';
    link.click();
});
