//map: é um método usado em arrays para criar um novo array com os resultados da aplicação de uma função em cada elemento do array original. Ele não modifica o array original, mas retorna um novo array com os elementos transformados.
//O método map itera sobre cada item do array, aplicando a função fornecida a cada elemento.

//dobre os numeros 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobroDosNumeros = numeros.map(numero => numero * 2);


//console.log(dobroDosNumeros);

//para cada elemento:
//retorne apenas uma string com o nome da pessoa
// remova apeas a chave 'nome' do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Kelvin', idade: 28 },
    { nome: 'Pedro', idade: 32 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 55 },
    { nome: 'Julia', idade: 48 },
    { nome: 'Carlos', idade: 22 },
]; 

const nomeDaPessoa = pessoas.map(pessoas => pessoas.nome);

const idadePessoa = pessoas.map(pessoas => ({idade: pessoas.idade}));

const pessoasComId = pessoas.map(function (pessoas, indice){
    pessoas.id = indice + 1;
    return pessoas;  //retorna um novo array com os objetos modificados
    // ou você pode usar o spread operator para modificar o objeto diretamente:
});

console.log(nomeDaPessoa);
console.log(idadePessoa);
console.log(pessoasComId);