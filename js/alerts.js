
/*Pode ser um desses valores:
🔹 'success' → ✅ verde (sucesso)
🔹 'error' → ❌ vermelho (erro)
🔹 'warning' → ⚠️ amarelo (aviso)
🔹 'info' → ℹ️ azul (informativo)
🔹 'question' → ❓ cinza (pergunta).*/












function alertListaVazia() {
    Swal.fire({
        title: 'Aviso',
        text: 'Lista Vazia',
        icon: 'info',
        confirmButtonText: 'OK',
        position: 'top',
        timer: 5000,
        timerProgressBar: true
        
    });
}














/*

EXEMPLO COM TODOS OS PARÂMETROS POSSIVEIS

Swal.fire({
    title: 'Tem certeza?', // 🧩 Título do alerta
    text: 'Você está prestes a excluir todos os itens da lista!', // 📝 Texto descritivo
    icon: 'warning', // ⚠️ Tipo de ícone (success, error, warning, info, question)
    iconColor: '#f39c12', // 🎨 Cor personalizada do ícone
    background: '#fffaf0', // 🎨 Cor de fundo da janela do alerta
    color: '#2c3e50', // 🎨 Cor do texto (global)
    position: 'center', // 📍 Posição do alerta na tela (ex: top, top-end, bottom)

    showCancelButton: true, // 🔘 Mostra o botão de cancelar
    showConfirmButton: true, // ✅ Mostra o botão de confirmação (padrão: true)
    confirmButtonText: 'Sim, excluir tudo!', // 🏷️ Texto do botão confirmar
    cancelButtonText: 'Cancelar', // 🏷️ Texto do botão cancelar
    confirmButtonColor: '#e74c3c', // 🎨 Cor do botão confirmar
    cancelButtonColor: '#95a5a6', // 🎨 Cor do botão cancelar

    timer: 10000, // ⏱️ Fecha automaticamente após 10 segundos (em ms)
    timerProgressBar: true, // 📊 Mostra uma barra de progresso do tempo
    allowOutsideClick: false, // 🚫 Impede fechar clicando fora
    allowEscapeKey: true, // ⌨️ Permite fechar com tecla ESC
    allowEnterKey: true, // ⌨️ Permite confirmar com tecla ENTER

    showCloseButton: true, // ❌ Mostra botão de fechar no canto superior direito
    closeButtonAriaLabel: 'Fechar alerta', // ♿ Acessibilidade do botão fechar

    customClass: {
        popup: 'popup-alerta', // Classe CSS para personalizar o container
        title: 'titulo-alerta', // Classe CSS personalizada para o título
        confirmButton: 'botao-confirmar', // Classe CSS para botão confirmar
        cancelButton: 'botao-cancelar' // Classe CSS para botão cancelar
    },

    backdrop: true, // 🌫️ Fundo escurecido atrás do alerta
    heightAuto: true, // 📐 Ajusta a altura automaticamente
    scrollbarPadding: false, // 🔧 Remove deslocamento causado por barra de rolagem
});

*/