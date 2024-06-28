function calcular(event) {
    event.preventDefault();

    const num1 = document.getElementById('peso').value;
    const num2 = document.getElementById('altura').value;
    const resultDiv = document.querySelector('.result');
    const resultContainer = document.querySelector('.result');

    //limpa classes  de resultado anteriores
    resultContainer.classList.remove('error',  'success');

    if (!num1 || !num2) {// verifica se os campos foram preenchidos
        resultContainer.classList.add('error'); //adiciona uma class se o campo não for preenchido
        resultDiv.innerHTML = 'Por favor preencher todos os campos.';
        return;
    }



    const imc = (num1 / (num2 ** 2)).toFixed(1);//calcula o imc


    let classificacao = '';//verificar a classificacao do imc
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }

    resultContainer.classList.add('success');//adiciona uma class se o 
    resultDiv.textContent = `Seu IMC é: ${imc}. Classificação: ${classificacao}.`;

}

function resetForm() {
    const form = document.querySelector('.formulario');
    form.reset();
    const resultDiv = document.querySelector('.result');
    const resultContainer = document.querySelector('.result');
    resultContainer.classList.remove('error', 'success');
    resultDiv.innerHTML = '';
}



