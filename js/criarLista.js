function adicionarProduto() {

    const prodTexto = document.getElementById('prod-input').value;
    const prodqtdTexto = document.getElementById('qtd-input').value;

    if (prodTexto && prodqtdTexto) {

        //criei o elemento LI
        const novoli = document.createElement('li');
        //criei um elemento de texto com a variavel prodTexto, que seria o nome do produto inserido
        const produtoNome = document.createTextNode(prodTexto);
        const produtoqtd = document.createTextNode(prodqtdTexto);


        //criando um campo para quantidade
        const inputQtd = document.createElement("input");
        inputQtd.type = "number";
        inputQtd.placeholder = "Quantidade Pega ...";
        inputQtd.classList.add("campo-qtd");

        // Campo de valor
        const inputValor = document.createElement("input");
        inputValor.type = "number";
        inputValor.placeholder = "Valor Unitario ...";
        inputValor.classList.add("campo-valor");

        // Botão de "Item Pego"
        const btnPego = document.createElement("button");
        btnPego.textContent = "✅";
        btnPego.classList.add("btn-pego");

        // Botão de excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "🗑️";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.addEventListener('click', function () {
            novoli.remove();
        });

        novoli.append(produtoNome, ' : ', produtoqtd, ' ', inputQtd, inputValor, btnPego, btnExcluir);

        //agora eu quero pegar este elemento e exibir na minha lista
        //Pego meu elemento UL
        const lista = document.getElementById('lista')

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
    /*goLive VS CODE*/
    window.location.href = "../listaFinalizada.html";

    
        // window.location.href = "../ListaDeCompras/listaFinalizada";
    
});