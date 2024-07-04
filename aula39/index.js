//WHILE: usado mais para não se tem certeza quando a condição vai ser atendida (sem uma condição inicial bem definida).  verifica a condição antes de executar o bloco de código

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min  = 1;
const max = 50;
let rand = 10;

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('FIM DO WHILE');
//DO-WHILE: usado para garantir que a condição seja verificada pelo menos uma vez

do {
    
    console.log(rand);
} while (rand !== 10);