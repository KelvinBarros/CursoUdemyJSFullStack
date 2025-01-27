class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }


    falar(){
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}`);
    }
    comer(){
        console.log('Comendo...');
    }

    beber(){
        console.log('Bebendo...');
    }
}

const p1 = new Pessoa('kelvin', 'barros');

console.log(p1.nome);