//Some todos os numeros (reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores (map)

//reduce é utilizado para reduzir o array a apenas 1 elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor){
  acumulador =+valor;
   return acumulador;

},);

console.log(total);


//retornar pessoa mais velha
const pessoas = [
    { nome: 'Kelvin', idade: 28 },
    { nome: 'Pedro', idade: 32 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 55 },
    { nome: 'Julia', idade: 48 },
    { nome: 'Carlos', idade: 22 },
]; 

const maisVelha = pessoas.reduce(function (acumulador, valor){
    if( acumulador.idade > valor.idade ) return acumulador;
    return valor;
});

console.log(maisVelha);