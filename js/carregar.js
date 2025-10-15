function carregarLista() {
    // Obtém o elemento <input type="file"> que foi usado para escolher o arquivo
    const input = document.getElementById('arquivoInput');

    // Pega o primeiro (e único) arquivo selecionado pelo usuário
    const arquivo = input.files[0];

    // Se nenhum arquivo foi selecionado, encerra a função
    if (!arquivo) return;

    // Cria um novo leitor de arquivos (FileReader) para ler o conteúdo do arquivo
    const leitor = new FileReader();

    // Define o que deve acontecer quando o arquivo terminar de ser lido
    leitor.onload = function (e) {
        // Obtém o conteúdo do arquivo lido (no caso, o HTML da lista)
        const html = e.target.result;

        // Insere o conteúdo HTML lido dentro da <ul> com id "lista"
        document.getElementById('lista').innerHTML = html;
        reativarEventosCalculo();

        // 🔥 Calcula o total imediatamente após carregar
        calcularTotal();
    };

    // Inicia a leitura do arquivo como texto
    leitor.readAsText(arquivo);
}
