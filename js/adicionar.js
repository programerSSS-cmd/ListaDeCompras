let adicionarClick = document.getElementById('btnAdicionar');
adicionarClick.addEventListener('click', function adicionar() {

    //Pegando os meus dois elementos principais, o produto e a lista
    let prod = document.getElementById('prod')
    let lista = document.getElementById('lista')

    //Primeira validação de entrada de dados
    if (prod.value != '') {
        //criando um elemento <li>
        let newProd = document.createElement('li')
        //colocando uma classe para este elemento <li>
        newProd.setAttribute('class', 'newProd')
        //inserindo o produto digitado no HTML do meu <li>
        newProd.innerHTML = prod.value
        //inserindo meu novo produto na lista
        lista.appendChild(newProd)
    } else {
        alert('Nenhum produto encontrado, verifique e tente novamente ...')
    }
})

