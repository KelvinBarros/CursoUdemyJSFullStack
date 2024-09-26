function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNum
        })
    }

    this.inicia = function() {
        this.cliqueBotoes();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();