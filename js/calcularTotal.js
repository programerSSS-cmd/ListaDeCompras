//Função para calcular o valor total dos produtos
//basicamente criamos um Loop que percorre os elementos da lista e calcula o multiplo das quantidades e valores
//digitados pelo usuario.

function calcularTotal() {
    let newlista = document.getElementsByClassName('newProd')
    let qtd = document.getElementsByClassName('newQtd')
    let vlr = document.getElementsByClassName('newVlr')
    let total = 0;

    if (lista.childElementCount == 0) {
        alert('listaVazia')
    } else {

        for (let x = 0; x < newlista.length; x++) {
            let mult = qtd[x].value * vlr[x].value
            total += mult
        }
    }
    let tot = document.getElementById('ptotal')
    tot.innerHTML = `Total : ${total}`
}