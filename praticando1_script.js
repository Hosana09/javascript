//alert('Olá, Mundo!')
function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas!`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia.
        imagem.src = 'fotomanha.jpg'
        document.body.style.background = "yellow"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde.
        imagem.src = 'fototarde.jpg'
        document.body.style.background = "green"
    } else {
        //Boa noite
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = "brown"
    }
}
