//Esta parte do projeto utilizei do seguinte prompt no GTP:
//'Quero que quando o meu usuario clicar no botão de salvar, 
// eu salve todo o html da minha lista, de preferencia de uma forma que seja criado um documento simples em txt ou
// de alguma outra forma, que eu possa recuperar este html posteriormente em um botão carregar, por exemplo. 
// O foco inicialmente é ver se é possivel fazer esta exportação e a qualidade disso, se é viavel ou não. 
// Contexto : estou fazendo um sistema de lista em JavaScript puro, porém quando recarrega a tela o HTML da lista 
// é perdido, justamente por que foi criado tudo dinamicamente no DOM do documento. eu não quero usar sql, 
// banco de dados, por que a lista é muito simples, contendo somente nome do produto, quantidade e valor,
// porém a quantidade e o valor não é necessario gravar, pois são variaveis, quero somente a lista com o nome 
// dos produtos. Após ele me dar um resultado, fui alinhando conforme eu queria que ficasse.

let salvar = document.getElementById('salvar')
salvar.addEventListener('click', function salvar() {

    if (lista.childElementCount == 0) {
        alert('Nada encontrado para salvarmos ...')
    } else {
        // Pega o elemento <ul> da lista
        const lista = document.getElementById('lista');

        // Captura o conteúdo HTML interno da <ul>, ou seja, os <li> com os produtos
        const html = lista.innerHTML;

        // Cria um "arquivo" Blob com esse HTML como conteúdo
        const blob = new Blob([html], { type: 'text/html;charset=utf-8' });

        // Cria um link <a> para download
        const link = document.createElement('a');

        // Cria uma URL temporária apontando para o Blob
        link.href = URL.createObjectURL(blob);

        // Define o nome do arquivo salvo
        link.download = 'lista-produtos.html';

        // Aciona o download automaticamente
        link.click();

    }

})