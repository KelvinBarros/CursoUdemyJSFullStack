function fizzBuzz(num) {
    if (typeof num !== 'number' || num <= 0) {
        return 'Entrada inválida. Digite um número inteiro.';
    }
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return `não é divisivel por 3 e 5`;
    }


}
for (let i = 0; i <= 100; i++) {
    console.log(i,fizzBuzz(i));
}



