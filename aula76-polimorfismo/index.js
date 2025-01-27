//SUPER CLASSE
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}


Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`O saldo da conta Nº ${this.conta} é R$${this.saldo.toFixed(2)}`);
}

// CONTA CORRENTE

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}


const contaCorrente = new ContaCorrente(11,22,0,100)
contaCorrente.depositar(10);
contaCorrente.sacar(900)
contaCorrente.sacar(100)

console.log();

// EXEMPLO 2 - CONTA POUPANCA

function ContaPoupanca(agencia, conta, saldo, ){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);

ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(22, 35, 400)

contaPoupanca.depositar(100);
contaPoupanca.sacar(600);