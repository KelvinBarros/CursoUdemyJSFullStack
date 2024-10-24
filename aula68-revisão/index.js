const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    endereco: 'Rua X, 100'
}

console.log(pessoa.nome); // Acessando o valor da chave nome

// Objetos não literais
// Criando um novo objeto usando Object()
const pessoa2 = new Object();
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome`); // Acessando o valor da chave nome do objeto pessoa2
}
pessoa2.nome = 'Maria';
pessoa2.idade = 24;

pessoa2.getAnoNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.nome); // Acessando o valor da chave nome
pessoa2.falarNome();
console.log(pessoa2.getAnoNascimento());

//QUANDO UMA FUNCTION ESTÁ DENTRO DE UM OBJETO, ELE É CHAMADO DE MÉTODO