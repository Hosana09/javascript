function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var saida = document.getElementById('saida')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //saida.innerHTML = `Idade calculada ${idade}.` //testando
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
        }
        //saida.style.textAlign = 'left'
        saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
        
}