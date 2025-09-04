class ValidarFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos(){
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML.slice(0,-1);
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} está vazio`);
                valid = false
            }

            if (campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }
        }


    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valid()){
            this.criaErro(campo, 'CPF invalido');
            return false;
        }
    }

    criaErro(campo,mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidarFormulario();