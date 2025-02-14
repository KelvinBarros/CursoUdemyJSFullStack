//Produto -> aumento, desconto
//camisa = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome,preco, cor){
    Produto.call(this, nome, preco);
};


 Camiseta.prototype = Object.create(Produto.prototype);
 Camiseta.prototype.constructor = Camiseta;
    
const produto = new Produto('generico', 11)
const camiseta = new Camiseta('regata', 10.5, 'preta')
camiseta.aumento(10);
console.log(camiseta)