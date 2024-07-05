/*try{
    //executa o codigo quando não há erros
} catch(e){
    //executa o codigo quando há erros
    
} finally{
    //executa o codigo independente do resultado do try/catch
} */

function retornaHora(data){
    if(data && !(data instanceof Date)){
       throw new TypeError('Esperando instacia de Date');
    }

    if (!data){
        data = new Date;
    }

    return data.toLocaleString('pt-BR');
}

try{// try: tente
    const data = new Date ('01-01-1998 17:41:24' );
    const hora = retornaHora(data);
    console.log(hora);

}catch (e){
    //tratar erro
} finally{
    console.log('Executou o finally');
}