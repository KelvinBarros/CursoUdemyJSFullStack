// SWIFT E CASE

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
        
        
}



/*if (diaSemana === 0 ) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}*/

console.log(diaSemana, diaSemanaTexto);