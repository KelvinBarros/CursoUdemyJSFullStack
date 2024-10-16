
//retorne a soma do dobro de todos os pares
//--filtrar pares
//--dobrar valores
//--reduzir (somar tudo)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(function(n){// filter sempre espera retorno booleano, true ou false
    return n % 2 === 0;

}).map(pares => pares * 2).reduce(function(acumulador, valor){
    acumulador+=valor;
    return acumulador;
});

console.log(pares); 