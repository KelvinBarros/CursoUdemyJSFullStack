//ATRIBUICAO VIA DESESTRUTURACAO >> OBJETOS

 const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua X, 100',
        numero: 50,
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
 }

 // desestruturacao
const { nome , sobrenome , idade } = pessoa;

console.log( nome, sobrenome, idade );

 