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
        inputQtd.style.width = "40px";
        inputQtd.placeholder = "Qtd.";
        inputQtd.classList.add("campo-qtd");

        // Campo de valor
        const inputValor = document.createElement("input");
        inputValor.type = "number";
        inputValor.style.width = "40px"
        inputValor.placeholder = "Vlr Uni.";
        inputValor.classList.add("campo-valor");

        // Botão de "Item Pego"
        const btnPego = document.createElement("button");
        btnPego.textContent = "✅";
        btnPego.style.borderRadius = "5px";
        btnPego.classList.add("btn-pego");

        // Botão de excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "🗑️";
        btnExcluir.style.backgroundColor = "red";
        btnExcluir.style.borderRadius = "5px";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.addEventListener('click', function () {
            novoli.remove();
        });

        novoli.append(produtoNome, '  ', produtoqtd, ' ', inputQtd, inputValor, btnPego, btnExcluir);

        //agora eu quero pegar este elemento e exibir na minha lista
        //Pego meu elemento UL
        const lista = document.getElementById('lista')

        //mesclo o meu novoLi a minha tag de lista UL
        lista.appendChild(novoli);

        //limpar campos
        document.querySelector("#prod-input").value = "";
        document.querySelector("#qtd-input").value = "";

        //alterar foo para colocar um novo produto
        document.getElementById('prod-input').focus();
    }


}


const btnadicionar = document.getElementById('adicionar')

btnadicionar.addEventListener('click', function (e) {
    //previnir que a pagina seja recarregada.
    e.preventDefault();

    adicionarProduto();

})

/*Salvar lista
const btnFinalizar = document.getElementById('finalizar-lista');
btnFinalizar.addEventListener('click', () => {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = 'listaFinalizada.html';
  }, 400); // deve coincidir com a duração do fadeOut
});

*/

document.getElementById("finalizar-lista").addEventListener("click", () => {

    const htmlDaLista = document.getElementById("lista").innerHTML;

    
    localStorage.setItem("listaDeCompras", htmlDaLista);
        /*goLive VS CODE
    
        document.body.classList.add("fade-out");

        // Espera a animação acabar (0.5s) antes de redirecionar
        setTimeout(() => {
            window.location.href = "../listaFinalizada.html"; // ou outra página
        }, 500);*/


        //GitPAGE
        document.body.classList.add("fade-out");

        // Espera a animação acabar (0.5s) antes de redirecionar
        setTimeout(() => {
            window.location.href = "../ListaDeCompras/listaFinalizada"; // ou outra página
        }, 500);


});