function enviarForm() {
  const form = document.querySelector('.formulario');// Seleciona o formulário
  const resultado = document.querySelector('.resultado');// Seleciona o resultado 

  const pessoas = []; // Array para armazenar as pessoas  

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = form.querySelector('#nome').value;
    const sobrenome = form.querySelector('#sobrenome').value;
    const peso = form.querySelector('#peso').value;
    const altura = form.querySelector('#altura').value;

    pessoas.push({ nome, sobrenome, peso, altura });

    console.log(pessoas);

    resultado.innerHTML += `<p>Nome: ${nome}<br> 
      Sobrenome: ${sobrenome}<br>
      Peso: ${peso}<br>
      Altura: ${altura}</p>`;

  }

  form.addEventListener('submit', recebeEventoForm);
}

enviarForm();

