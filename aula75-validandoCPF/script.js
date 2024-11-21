 //705.484.450-52

 function validarCPF(cpf) {
    // Remove pontos e traços do CPF
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Função para calcular dígitos verificadores
    function calcularDigito(cpf, fatorInicial) {
        let soma = 0;
        for (let i = 0; i < fatorInicial - 1; i++) {
            soma += parseInt(cpf.charAt(i)) * (fatorInicial - i);
        }
        const resto = (soma * 10) % 11;
        return resto === 10 ? 0 : resto;
    }

    // Verifica o primeiro dígito verificador
    const digito1 = calcularDigito(cpf, 10);
    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Verifica o segundo dígito verificador
    const digito2 = calcularDigito(cpf, 11);
    if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // CPF válido
    return true;
}

// Exemplo de uso:
const cpf = '705.484.450-52';
if (validarCPF(cpf)) {
    console.log(`'O CPF ${cpf} é valido!`);
} else {
    console.log(`O CPF ${cpf} é invalido!`);
}
