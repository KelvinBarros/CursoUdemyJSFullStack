// get que tem a função de retornar um valor, e outro precedido pela palavra set que serve para atribuir um valor. 



const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome, ) {
        this.nome = nome;
        this[_velocidade] = 0;
    }


    set velocidade(val) {
        if(typeof val !== 'number') return;
        if(val >= 100 || val <= 0) return;
        this[_velocidade] = val;
    }

    get velocidade() {
        return this[_velocidade];
    }
    
    acelerar() {
        if(this.velocidade >= 100) return;
        this[_velocidade]++;

        
    }

    frear() {
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');


for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1); 