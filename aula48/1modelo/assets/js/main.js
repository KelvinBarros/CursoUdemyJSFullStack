
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
    inputTarefa.focus();
    salvarTarefas() 
 

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

function limpar(){
    document.querySelector('.listTarefa').innerHTML = '';
}

//salvar no local storage

function salvarTarefas() {
    const tarefas = Array.from(document.querySelectorAll('.listTarefa li')).map(li => li.textContent);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}