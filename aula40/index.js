// CONTINUE E BREAK

const numeros = [1, 2, 3, 4, 5, 6, 7, 8,9]

for (let numero of numeros){
    // quando encontrar o continue, o numero vai ser pulado, e ir para o proximo
    if (numero === 2){
        continue;
    }

   if(numero === 7){
    // quando encontrar o break, a execução do loop é interrompida, e não é executado o resto do codigo
    break;
   }
    
    console.log(numero);
}  
