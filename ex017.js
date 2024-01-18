function soma(n1 = 1, n2 = 9) { //colocar parâmetros, caso não receba nenhum valor
    return n1 + n2
}

console.log(soma(1, 2))

let v = function (x) {
    return x * 2
}
console.log(v(2))

function fatorial(i) {
    let fat = 1
    for (let c = i; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//RECURSÃO
function fatt(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatt(n-1)
    }
}
console.log(fatt(5))