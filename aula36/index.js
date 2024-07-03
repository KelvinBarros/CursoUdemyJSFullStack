
const nome = ['kelvin', 'pedro','mario'];

//for classico: percorre o indice até terminar a repetição
//Geralmetne com itaraveis (arrays ou strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); 
}

console.log('----------------------');

// FOR IN usa o indice do array como valor
for (let i in nome) {
    console.log(nome[i]);
}

console.log('----------------------');

// FOR OF: busca diretamente o valor do indece 
for (let valor of nome){
    console.log(valor); 
 
}

console.log('----------------------');

nome.forEach(function(valor, indice){
    console.log(valor, indice);
});//usa valores padrão para os parametros da function
// current value, index e array(currentValue é obrigatorio)




