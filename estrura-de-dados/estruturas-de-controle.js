var num = 5;

if (num === 1) {
    console.log('O número é igual a 1.');
    num--;
} else {
    console.log(`O número não é igual a 1, o valor do número é ${num}.`);
    num++;
}

var month = 5;

if (month === 1) {
console.log('Janeiro');
} else if (month === 2) {
console.log('Fevereiro');
} else if (month === 3) {
console.log('Março');
} else {
console.log('O mês não é Janeiro, Fevereiro ou Maço.');
}

switch (month) {
    case 1:
    console.log('Janeiro');
    break;
    case 2:
    console.log('Fevereiro');
    break;
    case 3:
    console.log('Março');
    break;
    default:
    console.log('O mês não é Janeiro, Fevereiro ou Maço.');
    }
