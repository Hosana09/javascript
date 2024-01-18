function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let saida = document.getElementById('saida')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        saida.innerHTML = 'Impossível contar...'
        window.alert('[ERRO] Preencha todos os campos!')
    } else {
        saida.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p){
                saida.innerHTML += ` ${c} \u{1F603}`
            }
        } else { //contagem decrescente
            for (let c = i; c >= f; c -= p){
                saida.innerHTML += ` ${c} \u{1F603}`
            }
        }
        saida.innerHTML+= `\u{1F618}`
    }
}