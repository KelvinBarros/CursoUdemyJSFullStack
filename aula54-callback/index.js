// callback: funcoes executadas quando outras coisas forem realizadas
// uma funcão chama a outra, para dar ordem as coisas
// bastante usado na web para acessar API, bacon de dados entro outros
function rand(min =1000, max = 3000){
    const x = Math.random() * (max - min) + min;
    return Math.floor(x);
}
function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    },rand());
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();

    },rand());

}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();

    },rand());

}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Todos as funções executaram!');
}

