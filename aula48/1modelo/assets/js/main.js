const tarefa = document.querySelector('#tarefa');

function adicionar(){
    const item = document.createElement('li');
    item.textContent = tarefa.value;
    document.querySelector('#listTarefa').appendChild(item);
    tarefa.value = '';
}