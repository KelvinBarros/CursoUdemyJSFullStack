//TRATANDO E LANÇANDO ERROS (Try, Catch, Thow)
/*try{
    //executa o codigo quando não há erros
} catch(e){
    //executa o codigo quando há erros
    
} 
trow= lança o erro quando encontrado   
*/

function soma (x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('[ERRO] Valores inseridos são invalidos')
    } // lançar erro quando necessário
    return x + y;
}

try {// 
    console.log(soma(14, 14));
    console.log(soma(14,'quatorze'));
    
} catch (error) {
    console.log(error);
}