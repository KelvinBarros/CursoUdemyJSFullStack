// for in  lê os indices ou chaves do objeto
/*const frutas= [ 'pera', 'maca', 'uva'];


for(let i in frutas){
    console.log(frutas[i]);
 
}
*/

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30
};

for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves]);  // i é o indice ou chave, pessoa[i] é o valor associado a esse indice
 
}









/*for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}*/