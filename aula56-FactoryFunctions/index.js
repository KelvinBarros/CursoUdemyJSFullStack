//FACTORY FUNCTIONS = FUNÇAO FABRICA
 
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //metodo são funcoes dentro de objetos
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter: altera o valor e não passa ele como atributo
        set nomecompleto (nome){
            nome = nome.split(' ');
            this.nome = nome.shift();
            this.sobrenome = nome.join(' ');
        },
        fala: function(assunto){
            console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}. Vamos falar de ${assunto}?`);
        },
        altura: altura,
        peso: peso,
        //getter: obtem o valor e passa ele como atributo
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        }
    };
}
// this: sempre vai ser quem chamar o objeto, pegando a informação no seu escopo
//quando uma função esta dentro de um objeto, chamamos de método

const p1 = criaPessoa('Kelvin', 'Barros', 1.73, 78);
p1.nomecompleto= 'Kelvin Barros Dutra'
console.log(p1.nome);
console.log(p1.sobrenome);

console.log(p1.fala());