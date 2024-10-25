function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    //defineProperty
    Object.defineProperty(this, "estoque", {

        enumerable: true, // permite listar o atributo na iteração
        configurable: true,  // permite alterar o atributo (writable, enumerable, configurable)
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (valor >= 0) {
                estoque = valor;
            } else {
                throw new Error("Estoque não pode ser negativo");
            }
        }
    });


}


const p1 = new Produto("camisa", 20, 31);
console.log(p1);