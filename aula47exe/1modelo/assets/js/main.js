//selecionar elementos do DOM
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.btn-iniciar');
const pausar = document.querySelector('.btn-pausar');
const reiniciar = document.querySelector('.btn-reiniciar');

//definir as variaveis de controle
let segundos = 0;
let timer;
let isRun = false;

//função para iniciar o timer
function iniciarTimer() {
    if (!isRun) {
        timer = setInterval(atualizarRelogio, 1000);
        isRun = true;
        relogio.style.color = 'black';
    }
}
//função para pausar o timer
function pausarTimer() {
    if (isRun) {
        clearInterval(timer);
        isRun = false;
        relogio.style.color = 'red';
    }
}
//função para reiniciar o timer
function reiniciarTimer() {
    clearInterval(timer);
    segundos =0 ;
    atualizarRelogio();
    isRun = false;
    relogio.textContent = '00:00:00';
    relogio.style.color = 'black';
0}
//função para atualizar o relogio
function atualizarRelogio() {
    segundos++;
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;

    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundosRestantes < 10) {
        segundosRestantes = '0' + segundosRestantes;
    }

    relogio.textContent = `${horas}:${minutos}:${segundosRestantes}`;
}
// adicionar eventos listenera
iniciar.addEventListener('click', iniciarTimer);
pausar.addEventListener('click', pausarTimer);
reiniciar.addEventListener('click', reiniciarTimer);