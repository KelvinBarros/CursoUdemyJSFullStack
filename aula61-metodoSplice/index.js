const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia']

//nomes.splice(indice, delete, elem1, elem2, elem3);

//pop
const removido = nomes.splice(3,1, 'luiz')
console.log(nomes,removido);