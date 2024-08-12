var num = 1;
num = 3;
var price = 1.5;
var myName = "Hosana";
var trueValue = true;
var nullVar = null;
var und;

console.log("num =", num);
console.log(typeof num);
console.log("price =", price);
console.log(typeof price);
console.log("myName =", myName);
console.log(typeof myName);
console.log("trueValue =", trueValue);
console.log(typeof trueValue);
console.log("nullVar =", nullVar);
console.log(typeof nullVar);
console.log("und =", und);
console.log(typeof und);

var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';

    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

let a = 3;
let b = 6;

function soma() {
    return a + b;
}

console.log(soma(a, b));

alert("Está funcionando!")