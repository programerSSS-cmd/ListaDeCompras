document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do formulário
    const form = document.querySelector('.frmProduto');
    const quantidadeInput = document.getElementById('quantidade');
    const valorUnitarioInput = document.getElementById('valorUnitario');
    const totalInput = document.getElementById('Total');

    // Elementos da lista
    const listaPendentes = document.getElementById('lista-prod-pendente');
    const template = document.querySelector('.task-box.template');

    // Função para calcular o total
    function calcularTotal() {
        const quantidade = parseFloat(quantidadeInput.value) || 0;
        const valorUnitario = parseFloat(valorUnitarioInput.value) || 0;
        const total = quantidade * valorUnitario;
        
        totalInput.value = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    // Adicionar eventos aos inputs
    quantidadeInput.addEventListener('input', calcularTotal);
    valorUnitarioInput.addEventListener('input', calcularTotal);

    // Evento de submit do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Capturar valores
        const nome = document.getElementById('nomeProduto').value;
        const quantidade = quantidadeInput.value;
        const valorUnitario = valorUnitarioInput.value;
        const total = totalInput.value;

        // Validar campos obrigatórios
        if (!nome || !quantidade || !valorUnitario) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        // Clonar template
        const novoItem = template.cloneNode(true);
        novoItem.classList.remove('template');

        // Atualizar conteúdo
        const valoresSpan = novoItem.querySelector('.produto-valores');
        valoresSpan.innerHTML = `
            ${nome} - Qtd: ${quantidade} - Vl.Unit: ${valorUnitario} - Total: ${total}
            <ion-icon class="btn-done" name="checkmark-outline"></ion-icon>
            <ion-icon class="btn-remove" name="close-outline"></ion-icon>
        `;

        // Adicionar eventos aos ícones
        novoItem.querySelector('.btn-done').addEventListener('click', () => {
            document.getElementById('lista-prod-pegos').appendChild(novoItem);
        });

        novoItem.querySelector('.btn-remove').addEventListener('click', () => {
            novoItem.remove();
        });

        // Adicionar à lista
        listaPendentes.appendChild(novoItem);

        // Limpar formulário
        form.reset();
        totalInput.value = ''; // Reset adicional para o campo total
    });
});