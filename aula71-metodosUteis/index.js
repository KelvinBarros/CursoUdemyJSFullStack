//copiar objeto usando assing

const pessoa1 = {
    nome: 'Kelvin',
    idade: 28,
    cidade: 'São Paulo'
};
const pessoa2 = Object.assign({}, pessoa1, {cep: 92200722});

console.log(pessoa1);
console.log(pessoa2);

//para ver as chaves (keys) do array
console.log(Object.keys(pessoa1));
console.log(Object.keys(pessoa2));

/*

Object.create= cria um novo objeto com um prototype fornecido
Object.getPrototypeOf= retorna o prototype de um objeto
Object.setPrototypeOf= define o prototype de um objeto

Object.freeze= congela um objeto e não permite alterá-lo

Object.is= verifica se dois valores são iguais
Object.keys= ver as chaves (keys) do array
Object.defineProperty= devide uma propriedade
Object.defineProperties= devide varias propriedades

Object.assign= copia as chaves e valores de um ou mais objetos para um objeto

*/