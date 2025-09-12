let adicionarClick = document.getElementById('btnAdicionar');
adicionarClick.addEventListener('click', function adicionar() {

    //Pegando os meus dois elementos principais, o produto e a lista
    let prod = document.getElementById('prod')
    let lista = document.getElementById('lista')

    //Primeira validação de entrada de dados
    if (prod.value != '') {

        //criando todos os elementos dinâmicamente e atrelando a lista
        let newProd = document.createElement('li')
        newProd.setAttribute('class', 'newProd')
        newProd.innerHTML = `${prod.value}  : `
        lista.appendChild(newProd)

        let newQtd = document.createElement('input')
        newQtd.setAttribute('class', 'newQtd')
        newQtd.setAttribute('type', 'number')
        newQtd.setAttribute('placeholder', 'Digite a Quantidade...')
        newProd.appendChild(newQtd)

        let newVlr = document.createElement('input')
        newVlr.setAttribute('class', 'newVlr')
         newVlr.setAttribute('type', 'number')
        newVlr.setAttribute('placeholder', 'Digite o valor Unitario ...')
        newProd.appendChild(newVlr)

        let btnExcluir = document.createElement('button')
        btnExcluir.setAttribute('class', 'btnExcluir')
        btnExcluir.innerHTML = 'Excluir'
        newProd.appendChild(btnExcluir)

        //limpando e focando, campo para nova inserção de um novo produto
        if (newProd) {
            prod.value = ''
            prod.focus()
        }

    } else {
        alert('Nenhum produto encontrado, verifique e tente novamente ...')
    }
})

