function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes();
        },

        realizaConta() {

        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });// bind: para usar o this correto
            //usar arrowFunction nao muda o objeto referenciado pelo this

        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calc = criaCalculadora();
calc.inicia();