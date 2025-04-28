// Função para calcular o total
function calcularTotal() {
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

// Função para adicionar a ação de "Item Pego"
document.querySelectorAll(".btn-pego").forEach((btnPego) => {
    btnPego.addEventListener("click", () => {
        // Chama a função de cálculo após cada clique
        calcularTotal();
    });
});