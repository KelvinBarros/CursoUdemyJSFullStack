let num1 = 10.84585421452212; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2);//num1 só é considerado como string dentro do toString()
console.log(typeof num1); //num1 ainda é considerado como number

console.log(num1.toFixed(2)); //arredonda num1 para duas casas decimais
console.log(num1.toFixed(0)); //arredonda num1 para o inteiro mais próximo

console.log(Number.isInteger(num1)); //verifica se num1 é um número inteiro
console.log(Math.floor(num1)); //arredonda num1 para o inteiro inferior
console.log(Math.ceil(num1)); //arredonda num1 para o inteiro superior
console.log(Math.round(num1)); //arredonda num1 para o inteiro mais próximo