// Botão para voltar à lista original
const btnVoltar = document.getElementById("btn-voltar");

if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
        document.body.classList.add("fade-out");
        
        // Espera 500ms antes de redirecionar (tempo da animação)
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });
}

// 1. Monta a lista da localStorage
const ul = document.getElementById("lista-criada");
ul.innerHTML = localStorage.getItem("listaDeCompras");


// Captura Enter pressionado no campo de valor
document.getElementById('campo-valor').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do form
        document.getElementById('btn-pego').click(); // Simula o clique
    }
});
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

        // Recalcular o total após mover o item
        calcularTotal();
    });
});

// Função para calcular o total
function recalcularTotal() {
    let total = 0;

    // Seleciona todos os campos de quantidade e valor
    const qtdInputs = document.querySelectorAll(".campo-qtd");
    const valorInputs = document.querySelectorAll(".campo-valor");

    // Faz a soma de todos os itens (multiplicando quantidade x valor)
    qtdInputs.forEach((inputQtd, index) => {
        const quantidade = parseFloat(inputQtd.value) || 0;
        const valor = parseFloat(valorInputs[index].value) || 0;

        // Verificando se os valores são válidos
        if (!isNaN(valor) && !isNaN(quantidade)) {
            total += valor * quantidade;  // Multiplica e soma ao total
        }
    });

    // Atualiza o total no DOM
    const totalElement = document.querySelector("#section-total span");
    totalElement.textContent = "R$ " + total.toFixed(2).replace('.', ',');  // Formatação com vírgula
}

// Seleciona todos os botões com a classe "btn-excluir" (os botões de excluir)
document.querySelectorAll(".btn-excluir").forEach((botao) => {
    botao.addEventListener("click", () => {
        // Pega o item que está sendo excluído
        const item = botao.parentElement;

        // Obtém o valor e a quantidade do item a ser excluído
        const valorItem = parseFloat(item.querySelector(".campo-valor").value) || 0;
        const qtdItem = parseFloat(item.querySelector(".campo-qtd").value) || 0;

        // Subtrai o valor do item excluído do total
        let totalAtual = parseFloat(document.querySelector("#section-total span").textContent.replace('R$ ', '').replace(',', '.'));

        // Calcula o valor a ser subtraído do total (valorItem * qtdItem)
        let valorSubtraido = valorItem * qtdItem;
        let novoTotal = totalAtual - valorSubtraido;

        // Atualiza o total no DOM
        document.querySelector("#section-total span").textContent = "R$ " + novoTotal.toFixed(2).replace('.', ',');

        // Remove o item da lista de produtos (seja da lista-criada ou lista-finalizados)
        item.remove();

        // Recalcular o total após a exclusão (considerando todos os itens restantes)
        recalcularTotal();
    });
});


