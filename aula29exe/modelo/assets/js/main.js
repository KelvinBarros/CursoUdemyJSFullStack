const data = new Date(); // data atual
const diaSemana = data.getDay(); // dia da semana
const hora = data.getHours(); // hora
const min = data.getMinutes(); // minuntos
const sec = data.getSeconds(); // segundos

let diaSemanaTexto;//

const result = document.querySelector('.result')

// verificar dia da semana e transformar em texto

switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    
}

// mostrar na tela

result.innerHTML = `Hoje é ${diaSemanaTexto}, ${data.getDate()} de ${data.toLocaleString('pt-BR', { month: 'long' })} de ${data.getFullYear()} às ${hora}:${min}:${sec}`;

