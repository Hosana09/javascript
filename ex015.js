let num = [5, 8, 2, 9, 3]
num[5] = 6 //criando elemento 5 e colocando o 6
num.push(7) //acrescentando um último elemento, independente do tamanho
num.length //descobrindo o tamanho da array
let pos = num.indexOf(2) //descobrando a posição do valor

console.log(num)
console.log(`O vetor é ${num}.`)
console.log(`O valor 2 está na posição ${pos}.'`)
console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}.`)

num.sort() //colocando em ordem crescente
console.log(`O vetor em ordem crescente é ${num.sort()}.`)

//mostrando todos os valores do vetor
for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
    console.log(`A posição ${pos} tem valor ${num[pos]}.`)
}

//mostrando todos os valores do vetor (simplificada)
for (let pos in num) {
    console.log(num[pos])
} //para cada posição na variável composta, mostrar o num[pos]