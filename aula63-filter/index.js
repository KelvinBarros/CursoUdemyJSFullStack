//Filter, map e recuce
//filter sempre retorna um array com a mesma quantidade de elementos ou menos que o original

//Retorno os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaioresQue10 = numeros.filter(numero => numero > 10);// filter sempre espera retorno booleano, true ou false

//console.log(numerosMaioresQue10);



//retorne as pessoas que tem 5 letras ou mais no nome
//retorne as pessoas que tem mais de 50 anos
//retorne as pessoas que o nome termina com A

const pessoas = [
    { nome: 'Kelvin', idade: 28 },
    { nome: 'Pedro', idade: 32 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 55 },
    { nome: 'Julia', idade: 48 },
    { nome: 'Carlos', idade: 22 },
];  

const pessoasCom5LetrasOuMais = pessoas.filter(pessoa => pessoa.nome.length >= 6);

const pessoasComMaisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);

const pessoasQueTerminamComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));


console.log(pessoasCom5LetrasOuMais);
console.log(pessoasComMaisDe50Anos);
console.log(pessoasQueTerminamComA);