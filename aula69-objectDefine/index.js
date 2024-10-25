//defineProperty - defineProperties

function Produto (nome,preço, estoque){
    this.nome = nome;
    this.preço = preço;
    
    //defineProperty
    Object.defineProperty(this, "estoque",{
        value: estoque,
        writable: false, // permite alterar o valor
        enumerable: true, // permite listar o atributo na iteração
        configurable: false // permite alterar o atributo (writable, enumerable, configurable)
    })

    //defineProperties
    Object.defineProperties(this, {
        preco: {
            value: preço,
            writable: true,
            enumerable: true,
            configurable: true
        },
        nome:{
            value: nome,
            writable: true,
            enumerable: true,
            configurable: true
        }
    })
}


const p1 = new Produto("camisa", 20, 31);

p1.estoque = 5000 // bloqueado pelo writable
delete p1.estoque // bloqueado pelo configurable
console.log(p1.estoque);