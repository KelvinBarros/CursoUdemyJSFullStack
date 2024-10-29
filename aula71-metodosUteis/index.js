//copiar objeto usando assing

const pessoa1 = {
    nome: 'Kelvin',
    idade: 28,
    cidade: 'São Paulo'
};
const pessoa2 = Object.assign({}, pessoa1, {cep: 92200722});

console.log(pessoa1);
console.log(pessoa2);