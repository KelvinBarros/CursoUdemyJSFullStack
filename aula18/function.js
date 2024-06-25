function pessoa (nome, sobrenome, idade, endereco) { // Definindo a função pessoa
    return {
        nome,
        sobrenome,
        idade,
        endereco,
        
    }// Retornando o objeto pessoa
}

const p1 = pessoa('João', 'Silva', 30, 'Rua X, 100');
const p2 = pessoa('Maria', 'Souza', 28, 'Rua Y, 200');
const p3 = pessoa('Pedro', 'Alves', 32, 'Rua e, 300');

console.log(p1.nome, p1.endereco);// Acessando os dados da pessoa 1 