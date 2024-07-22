function retornaFuncao(nome){
    return function(){
     return nome;
    }
}

const funcao = retornaFuncao('kelvin');
const funcao2 = retornaFuncao('josiely');

console.dir(funcao);
console.dir(funcao2);

//closure: acesso ao seu escopo lexico 
