/*
Referencia (mutaveis): array, object, function - passado por referência, não por valor.
 */

let a = ['1', '2', '3'];
let b = a; 

console.log(a, b); 

a.push('4'); // alterando o valor de a, também alterando o valor de b. porque b é uma referência de a

console.log(a, b);

b.pop(); // alterando o valor de b, também alterando o valor de a. porque a é uma referência de b

console.log(a, b);