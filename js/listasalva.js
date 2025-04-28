// 1. Monta a lista da localStorage
const ul = document.getElementById("lista-criada");
ul.innerHTML = localStorage.getItem("listaDeCompras");

// Seleciona todos os botões com a classe "btn-pego" (ou seja, todos os ✅ que estão na tela)
document.querySelectorAll(".btn-pego").forEach((botao) => {
    
    // Para cada botão encontrado, adiciona um "escutador de evento" de clique
    botao.addEventListener("click", () => {

        // Pega o elemento pai do botão (no caso, o <li> que contém o produto)
        const item = botao.parentElement;

        // Seleciona a lista onde os itens finalizados devem ser colocados
        const listaFinalizados = document.getElementById("lista-finalizados");

        // Remove o botão de "pego" (✅), já que ele já foi clicado e o item foi marcado como finalizado
        //botao.remove();
        // Muda o conteúdo do botão para um ícone de edição (por exemplo, "✏️")
        botao.textContent = "✏️";  // Alterando o ícone para o símbolo de lápis

        // Move o item inteiro (o <li>) da lista atual para a lista de finalizados
        listaFinalizados.appendChild(item);
        
        calcularTotal();
    });
});

// Seleciona todos os botões com a classe "btn-excluir" (os botões de excluir)
document.querySelectorAll(".btn-excluir").forEach((botao) => {

    // Para cada botão encontrado, adiciona um "escutador de evento" de clique
    botao.addEventListener("click", () => {

        // Quando clicado, remove o elemento pai (o <li>), apagando o item da lista
        botao.parentElement.remove();
    });
});