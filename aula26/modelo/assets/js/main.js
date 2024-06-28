function calcular(event) {
        event.preventDefault();

        const num1= document.querySelector('peso').value;
        const num2= document.querySelector('altura').value;
        const resultDiv = document.querySelector('.result');

        if(!peso || !altura){
            resultDiv.textContent = 'Por favor preencher todos os campos';
            return;
        }

        const imc = num1 / (num2 ** 2);



        resultDiv.textContent = `Seu IMC é: ${imc}.`;

    }
    
