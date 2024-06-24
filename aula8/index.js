const nome = 'Kelvin';
const sobrenome = 'Dutra';
const idade = 24;
const peso = 78;
const altura = 1.73;

let imc = peso / (altura ** 2);

let anoNascimento= 2000;

console.log(`Nome: ${nome} ${sobrenome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Peso: ${peso}kg`);
console.log(`Altura: ${altura}m`);

console.log(`IMC: ${imc.toFixed(2)}`);