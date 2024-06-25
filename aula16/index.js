const alunos = ['João', 'Maria', 'Pedro'];


alunos[0] = 'José';
alunos[3] = 'Lucas';
alunos.push('Ana'); // Adiciona um novo elemento ao final da array
alunos.unshift('Antônio'); // Insere o elemento no início da array

alunos.pop(); // Remove o último elemento da array

console.log(alunos); // Imprime: ['Antônio', 'José', 'Maria', '
console.log(alunos[1]);// Imprime: José

console.log(alunos.length);// Monstra a quantidades de elementos na array