function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', event => {
            if (event.key === 'Enter') 
                this.realizaConta();
        });
    }
    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('button-eq')) this.realizaConta();

        });
    };

    this.realizaConta = () => {
        try {
            const resultado = eval(this.display.value);
            
            if(!resultado){
                alert('conta invalida');
                return;
            }

            this.display.value = resultado;
        } catch (error) {
            this.display.value = 'Conta invalida';
            return;
        }
    }


    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus();
    }; 
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.clear = () => this.display.value = '';
}

const calculadora = new Calculadora();
calculadora.inicia();