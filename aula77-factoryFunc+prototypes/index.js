function criaPessoa(nome, sobrenome){
    const pessoaPrototype ={
        fala(){
            return `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
        },
        comenta(){
            return `Comentando...`;
        },
    }

    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            writable: true,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            writable: true,
            enumerable: true
        },
    }

    )
}

const p1 = criaPessoa('Kelvin', 'Barros');
const p2 = criaPessoa('joao', 'Dutra');

console.log(p1);
console.log(p2);