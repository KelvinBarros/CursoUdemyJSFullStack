//usando em objetos não literais : funcao construtora

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

 Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual)/100);

 };

 Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual)/100);
 };

 const p1 = new Produto("camisa", 20);
 p1.desconto(10);
 console.log(p1.preco); // 18