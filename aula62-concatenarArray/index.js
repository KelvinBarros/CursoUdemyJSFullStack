const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2);

const a4 = [...a1, ...a2]


console.log(a3); // [1, 2, 3, 5, 6, 7] - O array a3 é concatenado ao array a2, resultando em um novo array com todos os elementos.
console.log(a4);// usando spread para concatenar