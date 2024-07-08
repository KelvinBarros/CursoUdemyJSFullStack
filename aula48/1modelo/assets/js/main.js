//buscar elementos DOM

const tarefas = document.querySelector('.tarefas');

//adicionar evento click ao botão


//adicionar tarefa do input ao lista

function adicionarTarefa() {
    const inputTarefa = document.querySelector('.inputTarefa');
    const tarefaTexto = inputTarefa.value;

    if (tarefaTexto.trim() === '') {
        alert('Digite uma tarefa válida');
        return;
    }

    const tarefaElemento = document.createElement('li');
    tarefaElemento.textContent = tarefaTexto;

    tarefas.appendChild(tarefaElemento);

    inputTarefa.value = '';
}



const botaoAdicionar = document.querySelector('.adicionarTarefa');
botaoAdicionar.addEventListener('click', adicionarTarefa);