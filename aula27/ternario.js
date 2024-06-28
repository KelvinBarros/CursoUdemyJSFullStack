//OPERACAO TERNARIA

//substitui o uso de if else, em casos simples
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'parabens usuario' : 'ta quase la ';
//(condicao) ? 'valor para verdadeiro' : 'valor para falso

console.log(nivelUsuario);

//----------------------------------------------------------------------
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
//=----------------------------------------------------------------------


//como seria utilizando if else:

let nivelUsuario2;
if(pontuacaoUsuario >= 1000){
    nivelUsuario2 = 'parabens usuario';
}else{
    nivelUsuario2 = 'ta quase la ';
}

console.log(nivelUsuario2);

