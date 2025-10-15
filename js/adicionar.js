let adicionarClick = document.getElementById('btnAdicionar');
adicionarClick.addEventListener('click', function adicionar() {

    //Pegando os meus dois elementos principais, o produto e a lista
    let prod = document.getElementById('prod')
    let lista = document.getElementById('lista')

    //Primeira validação de entrada de dados
    if (prod.value != '') {

        //criando todos os elementos dinâmicamente e atrelando a lista
        let newProd = document.createElement('li')
        newProd.className = 'newProd'
        newProd.innerHTML = `${prod.value}  : `
        lista.appendChild(newProd)

        let newQtd = document.createElement('input')
        newQtd.className = 'newQtd'
        newQtd.type = 'number'
        newQtd.placeholder = 'Digite a Quantidade...'
        newProd.appendChild(newQtd)

        let newVlr = document.createElement('input')
        newVlr.className = 'newVlr'
        newVlr.type = 'number'
        newVlr.placeholder = 'Digite o valor Unitario ...'
        newProd.appendChild(newVlr)

        // Adiciona eventos para calcular total ao alterar valores
        newQtd.addEventListener('input', calcularTotal);
        newVlr.addEventListener('input', calcularTotal);

        let btnExcluir = document.createElement('button')
        btnExcluir.className = 'btnExcluir'
        btnExcluir.innerHTML = 'Excluir'
        btnExcluir.innerHTML = '🗑️';
        newProd.appendChild(btnExcluir)

        btnExcluir.addEventListener('click', function () {
            lista.removeChild(newProd);
            calcularTotal(); // Atualiza o total após remoção
        });

        //limpando e focando, campo para nova inserção de um novo produto
        if (newProd) {
            prod.value = ''
            prod.focus()
            ajustarPlaceholdersMobile()
        }
    } else {
        alert('Nenhum produto encontrado, verifique e tente novamente ...')
    }

})
//adicionando a opção de adicionar com ENTER do teclado
document.getElementById('prod').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarClick.click(); // Simula o clique no botão "Adicionar"
    }
});