function ajustarPlaceholdersMobile() {
    if (window.innerWidth <= 768) {
        // Campo principal
        document.getElementById('prod').placeholder = "Produto";

        // Campos de quantidade
        const qtds = document.getElementsByClassName('newQtd');
        for (let i = 0; i < qtds.length; i++) {
            qtds[i].placeholder = "Qtd";
        }

        // Campos de valor
        const vlrs = document.getElementsByClassName('newVlr');
        for (let i = 0; i < vlrs.length; i++) {
            vlrs[i].placeholder = "Vlr";
        }
    } else {
        // Restaurar placeholders originais no desktop
        document.getElementById('prod').placeholder = "Digite um produto ...";

        const qtds = document.getElementsByClassName('newQtd');
        for (let i = 0; i < qtds.length; i++) {
            qtds[i].placeholder = "Digite a quantidade ...";
        }

        const vlrs = document.getElementsByClassName('newVlr');
        for (let i = 0; i < vlrs.length; i++) {
            vlrs[i].placeholder = "Digite o valor unitário ...";
        }
    }
}

// Ajusta ao carregar a página
window.addEventListener('load', ajustarPlaceholdersMobile);

// Ajusta ao redimensionar a tela
window.addEventListener('resize', ajustarPlaceholdersMobile);
