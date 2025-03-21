document.addEventListener('DOMContentLoaded', function () {
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

    // Adicionar eventos aos inputs para calcular o total, sempre que for inserido um valor no campo QTD ou VL. Unitario.
    quantidadeInput.addEventListener('input', calcularTotal);
    valorUnitarioInput.addEventListener('input', calcularTotal);

    // Evento de submit do formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Capturar valores
        const nome = document.getElementById('nomeProduto').value;
        const quantidade = quantidadeInput.value;
        const valorUnitario = valorUnitarioInput.value;
        const total = totalInput.value;


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




        // remanejamento de produtos, levar o produto de uma lista para outra , ao clicar no botão btn-done.
        // Adicionar evento ao ícone de concluir
        novoItem.querySelector('.btn-done').addEventListener('click', function () {
            const listaFinalizados = document.getElementById('lista-prod-pegos');

            // Move o item clicado para a lista de finalizados
            listaFinalizados.appendChild(novoItem);

            // Remove o evento de concluir (opcional)
            this.removeEventListener('click', arguments.callee);
        });

        // Modificar a função de clique
        novoItem.querySelector('.btn-done').addEventListener('click', function () {
            const listaFinalizados = document.getElementById('lista-prod-pegos');
        });
    });
});