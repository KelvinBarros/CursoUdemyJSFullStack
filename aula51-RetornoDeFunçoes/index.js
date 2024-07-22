// return: retorna um valor e termina a funcão

function soma (a , b){
    return a + b;
};
console.log(soma(7, 7));

// retorno com função
function criaPessoa (nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('kelvin', 'barros');
const p2 = criaPessoa('kelvin', 'barros');


console.log(typeof p1);
console.log(typeof p2);


//

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('ola')
console.log(olaMundo(' mundo'));  