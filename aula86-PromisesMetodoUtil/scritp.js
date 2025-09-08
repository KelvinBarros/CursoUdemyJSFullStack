function criaAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") reject("cai no erro");
    setTimeout(() => {
      resolve(mensagem.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

const promises = [
  // "primeiro valor",
  esperaAi("Promise 1", criaAleatorio(1, 5)),
  esperaAi("promise 2", criaAleatorio(1, 5)),
  esperaAi("promise 3", criaAleatorio(1, 5)),
  //esperaAi(1000, 1000),
  "outro valor",
];

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Pagina em cache");
  } else {
    return esperaAi("Baixei a pagina", 1000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('erro',e));







//  Promises.all = roda várias Promises ao mesmo tempo. só dar o resultado quando todas tiverem sucesso. Se uma falhar, tudo falha.
//  Promises.race = retorna a primeira que terminar (tanto sucesso quanto erro).
//  Promise.resolve = Cria uma Promise já resolvida imediatamente (sucesso). Útil quando você quer forçar algo a ser uma Promise.
//  Promise.reject = Cria uma Promise já rejeitada imediatamente (erro). Útil para simular erros.
