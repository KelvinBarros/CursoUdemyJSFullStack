// Prototipo é o termo usado para se referir ao que foi criado pela primeira vez
//, servindo de modelo ou molde para futuras produções 



// construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}


//instancia 

const pessoa1 = new Pessoa('kelvin', 'B');
const pessoa2 = new Pessoa('josiely', "D");

console.dir(pessoa1);
console.dir(pessoa2);