averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 24.5;
averageTemp[4] = 13.6;

diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
console.log(diasDaSemana)
console.log(diasDaSemana.length)

for (let i = 0; i < diasDaSemana.length; i++){
    console.log(`O dia da semana na posição ${i} da lista se refere a ${diasDaSemana[i]}.`)
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.push(11)
numeros.push(12, 13)
console.log(numeros)
console.log(numeros.length)
numeros.unshift(-1)
numeros.unshift(-2, -3)
numeros.pop()
console.log(numeros)
console.log(numeros.length)
numeros.splice(5, 0, 2, 3, 4)
console.log(numeros)
console.log(numeros.length)