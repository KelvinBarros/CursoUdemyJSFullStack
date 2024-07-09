document.addEventListener('DOMContentLoaded', carregarTarefas);

function adicionar() {
    
    const inputTarefa = document.querySelector('#inputTarefa');
    const tarefa = inputTarefa.value;


    if (tarefa === '') {
        alert('Preencha o campo da tarefa');
        return;
    }

    const item = document.createElement('li');
    item.textContent = tarefa;
    document.querySelector('.listTarefa').appendChild(item);
    inputTarefa.value = '';
 

    // criar botão do lado do li
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        item.remove();
    });
    item.appendChild(botaoExcluir);
    
}

// acionar a funcao adicionar, quando pressionar enter

document.querySelector('#inputTarefa').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        adicionar();
    }
});

