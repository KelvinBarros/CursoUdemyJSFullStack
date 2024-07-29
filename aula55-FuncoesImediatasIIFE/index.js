// IIFE: Immediately-invoked function expression

(function () {
    console.log('Hello World!');
    const random = Math.random();
    console.log(random);
})();

//Funcao criada dentro de parenteses, após fechar o parenteses, usar novametne () para chamar a funcao. (tambem considerada função anonima)

/* Como o próprio nome diz, ela executa a função imediatamente depois de criada. Mas por que usar? Encapsulamento! Tenha em mente que variáveis em Javascript têm como escopo a função pela qual elas foram definidas (podem ser acessadas somente dentro da função, jamais fora). Ao criar uma função anônima com execução imediata, podemos criar um escopo temporário para nossas funções e variáveis. Com isso, evitamos poluição no nosso escopo global e possíveis conflitos de variáveis ou funções com o mesmo nome*/