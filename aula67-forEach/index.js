const a1 = [1,2,3,4,5,6,7,8,9]
total = 0;
a1.forEach(valor => {
    total += valor;
})



console.log(total);

/*O método forEach itera sobre cada item do array e aplica a função fornecida como argumento a cada elemento.
A função de callback pode receber até três argumentos: o elemento atual, o índice do elemento e o array original.
O forEach não modifica o array original, mas você pode alterar os elementos diretamente se o array contiver objetos.*/


//Não retorna um valor, então não pode ser encadeado como alguns outros métodos de array.
//É ideal para casos em que você deseja realizar uma ação em cada elemento de um array sem precisar retornar um novo array.