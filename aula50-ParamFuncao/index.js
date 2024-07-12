//PARAMETROS DE FUNÇÃO
//podemos ou não enviar o parametro para executar a função...
//... isso só funciona com função declarada com a palavra 'Function'

function arg(){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(total);
}

arg(1,2,3,4,5,6,7);// argumentos: são os valores enviadas para os parametros

function funcao (a, b=0, c=2){
    
    console.log(a + b + c);
}
funcao(1)

//usar rest operations para quando não tiver valor fixo a receber no parmetros

function restArgs(...args){
    console.log(args);
}

restArgs(1,2,3,4,5,6,7,8,9,10)