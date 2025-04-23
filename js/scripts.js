function adicionarProduto() {

    const prodTexto = document.getElementById('prod-input').value;

    if (prodTexto) {

        //criei o elemento LI
        var novoli = document.createElement('li');
        //criei um elemento de texto com a variavel prodTexto, que seria o nome do produto inserido
        var produtoNome = document.createTextNode(prodTexto)
        //mesclei o nome do produto junto ao elemento de Lista
        novoli.appendChild(produtoNome);

        //agora eu quero pegar este elemento e exibir na minha lista
        //Pego meu elemento UL
        var lista = document.getElementById('lista')

        //mesclo o meu novoLi a minha tag de lista UL
        lista.appendChild(novoli);

        //limpar campo do produto para inserção de um novo
        document.querySelector("#prod-input").value = "";
    }

    
}


const btnadicionar = document.getElementById('adicionar')

btnadicionar.addEventListener('click', function (e) {
    //previnir que a pagina seja recarregada.
    e.preventDefault();

    adicionarProduto();
    
})

