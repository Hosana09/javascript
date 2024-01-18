let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) { //criando uma função dentro do objeto
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2) //atribuindo valores à função
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)