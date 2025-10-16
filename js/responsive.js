function ajustarPlaceholdersMobile() {
    if (window.innerWidth <= 800) {
        // Campo principal
        document.getElementById('prod').placeholder = "Produto...";

        // Campos de quantidade
        const qtds = document.getElementsByClassName('newQtd');
        for (let i = 0; i < qtds.length; i++) {
            qtds[i].placeholder = "Quantia...";
        }

        // Campos de valor
        const vlrs = document.getElementsByClassName('newVlr');
        for (let i = 0; i < vlrs.length; i++) {
            vlrs[i].placeholder = "Valor...";
        }
    }
}

// Ajusta ao redimensionar a tela
window.addEventListener('resize', ajustarPlaceholdersMobile);
