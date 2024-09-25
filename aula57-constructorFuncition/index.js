//funçao construtora  constroi -> objetos
//funcao fabrica fabrica -> objetos

//funcao construtora é iniciada com letra maiuscula e usa (new)
// exemplo: Pessoa (new)


function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const p1 = new Pessoa('kelvin', '24');

console.log(p1.nome);