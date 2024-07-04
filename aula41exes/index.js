function max(a, b) {
    if (a > b) return a;
     return b;
}

console.log(max(55, 90));


//outra forma de fazer: refatorando o codigo

function maxRefactor(a, b) {
    return a > b ? a : b;
}

console.log(maxRefactor(55, 90));

// ou usando arrow funcion:

const maxArrow = (a, b) => a > b ? a : b;

console.log(maxArrow(55, 90));

// Como usar arrow function em metodos de objetos: