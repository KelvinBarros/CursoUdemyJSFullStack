const pessoa1 = {
    nome: 'Kelvin',
    sobrenome: 'Dutra',
    idade: 24,
    endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua dos Pássaros',
        numero: 456,
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

const pessoa3 = {
    nome: 'Pedro',
    sobrenome: 'Souza',
    idade: 28,
    endereco: {
        rua: 'Rua das Orquídeas',
        numero: 789,
        cidade: 'Belo Horizonte',
        estado: 'MG'
    }
}

console.log(pessoa1.nome); // Acessando o nome da pessoa
console.log(pessoa1.endereco.rua); // Acessando a