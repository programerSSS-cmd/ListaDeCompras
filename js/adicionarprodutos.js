function adicionarProduto() {

    const prodTexto = document.getElementById('prod-input').value;
    const prodqtdTexto = document.getElementById('qtd-input').value;

    if (prodTexto && prodqtdTexto) {

        //criei o elemento LI
        var novoli = document.createElement('li');
        //criei um elemento de texto com a variavel prodTexto, que seria o nome do produto inserido e a quantidade
        var produtoNome = document.createTextNode(prodTexto);
        var produtoqtd = document.createTextNode(prodqtdTexto);
        //mesclei o nome e a quantidade do produto junto ao elemento de Lista com somente append
        //Preciso que quando seja mesclado, criar um botão para exclusão deste novo item
        var btnCancelaprod = document.createElement('button');
        btnCancelaprod.textContent = '-';
        btnCancelaprod.classList.add('btn-cancela-prod')
        btnCancelaprod.addEventListener('click', function () {
            novoli.remove();
        });
        novoli.append(produtoNome, ' : ', produtoqtd, ' ', btnCancelaprod);

        //agora eu quero pegar este elemento e exibir na minha lista
        //Pego meu elemento UL
        var lista = document.getElementById('lista')

        //mesclo o meu novoLi a minha tag de lista UL
        lista.appendChild(novoli);

        //limpar campos
        document.querySelector("#prod-input").value = "";
        document.querySelector("#qtd-input").value = "";
    }


}


const btnadicionar = document.getElementById('adicionar')

btnadicionar.addEventListener('click', function (e) {
    //previnir que a pagina seja recarregada.
    e.preventDefault();

    adicionarProduto();

})

//Salvar lista

document.getElementById("finalizar-lista").addEventListener("click", () => {
    const htmlDaLista = document.getElementById("lista").innerHTML;
    
    localStorage.setItem("listaDeCompras", htmlDaLista);
    location.href = "listaFinalizada.html";

});