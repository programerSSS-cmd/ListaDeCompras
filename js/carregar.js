function carregarLista() {
    const input = document.getElementById('arquivoInput');
    const arquivo = input.files[0];

    // Se nenhum arquivo foi selecionado, encerra
    if (!arquivo) return;

    // ✅ Validação de formato (somente arquivos .html)
    const nomeArquivo = arquivo.name.toLowerCase();
    const tipoArquivo = arquivo.type;

    if (!nomeArquivo.endsWith('.html') && tipoArquivo !== 'text/html') {
        alertCarregarLista(); // dispara o seu alerta
        input.value = ""; // limpa o input para forçar nova seleção
        return;
    }

    // Cria o leitor de arquivos
    const leitor = new FileReader();

    leitor.onload = function (e) {
        const html = e.target.result;

        // Verificação adicional: o conteúdo precisa conter <li> ou algo da lista
        if (!html.includes('<li')) {
            alertCarregarLista();
            input.value = "";
            return;
        }

        // Insere o conteúdo da lista
        document.getElementById('lista').innerHTML = html;

        // Reativa eventos e recalcula o total
        reativarEventosCalculo();
        reativarEventosExclusao();
        calcularTotal();
    };

    leitor.readAsText(arquivo);
}


function reativarEventosExclusao() {
    const botoesExcluir = document.querySelectorAll('.btnExcluir');

    botoesExcluir.forEach(btn => {
        btn.onclick = function () {
            const li = this.closest('li');
            if (li) {
                li.remove();
                calcularTotal();
            }
        };
    });
}