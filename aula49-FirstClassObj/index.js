
//hoisting: funçoes são elevadas pelo motor do navegados para o inicio do codigo, então não  importa o momento em que vou declarar a função, posso chamar ela antes ou depois de estar declarada

fala();
function fala(){
    console.log('Olá, mundo!');
}
fala();

//funçoes são First-class-objects (obj de primeira classe)
//function expression
const souUmDado = function (){
    console.log('Sou uma function expression!');
};
souUmDado(); 
//a funcão pode retornar um dado, que pode ser usado em variáveis

//a funcao pode receber um parmetro e retornar um dado para o proprio parametro. ex:

function executarFn(funcao){
    funcao();
}

executarFn(souUmDado);
// a fucao acima está executando o proprio parametro;
// isso permite tratar uma funcão como um dado
// --------------------------------------


//arrow fuction

const souUmDadoArrow = () => console.log('Sou uma arrow function!');
souUmDadoArrow();


//dentro de um objeto

const falar = {
    falar2(){
        console.log('Olá, mundo!');
    }
};

falar.falar2();