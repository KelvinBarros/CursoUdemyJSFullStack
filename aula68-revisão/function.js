//factory function & constructor function / classes


//FACTORY FUNCTION
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
           return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Kelvin', 'Barros');
console.log(p1.nomeCompleto);


//CONSTRUCTOR FUNCTION

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Kelvin', 'Barros');
console.log(p2);