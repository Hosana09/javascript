let numero = document.getElementById('txtn')
let resultado = document.getElementById('seln')
let final = document.getElementById('saida')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        resultado.appendChild(item)
        final.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ' '
    numero.focus()
} 

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = soma/total
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        final.innerHTML = ''
        final.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        final.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        final.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        final.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        final.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}