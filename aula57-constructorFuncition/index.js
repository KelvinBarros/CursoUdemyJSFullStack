//funçao construtora  constroi -> objetos
//funcao fabrica fabrica -> objetos

//funcao construtora é iniciada com letra maiuscula e usa (new)
// exemplo: Pessoa (new)


function Pessoa(nome, idade){

    //atributos ou metodos privados
    const ID = 1234;
    const metodoInterno = function(){

    };

    //atributos ou metodos publicos
    this.nome = nome;
    this.idade = idade;

    this.metodo = function(){
        console.log(this.nome + ' Este é um método');
    }
}

const p1 = new Pessoa('kelvin', '24');
const p2 = new Pessoa('josiely', '26');
//new: cria um objeto vazio, aponta o this para o mesmo objeto e atribui ele diretamente a variavel, sem necessidade de um return

console.log(p1.nome);
p2.metodo()