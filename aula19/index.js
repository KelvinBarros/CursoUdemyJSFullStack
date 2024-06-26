/*
Tipos Primitivos (imutaveis): string, number, boolean, null, undefined (bigInt, Symbol) - passado por valor, não por referência.(valores copiados)
 */

let a = 'a';
let b = a;

console.log(a, b);

a = 'x';// alterando o valor de a, mas não alterando o valor de b. porque b é uma cópia de a
console.log(a, b); // a = 'x', b = 'a'

//----------------------------------------------------
