// get que tem a função de retornar um valor, e outro precedido pela palavra set que serve para atribuir um valor. 


class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const p1 = new Pessoa("kelvin", "barros");

p1.nomeCompleto = "Kelvin Barros";
console.log(p1.nomeCompleto);