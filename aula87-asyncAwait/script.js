function criaAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof mensagem !== "string") {
        reject("há um erro na execução");
        return;
      }

      resolve(mensagem.toUpperCase(+" - Passei na promise"));
      return;
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi("fase 1", criaAleatorio(0, 3));
    console.log(fase1);
    const fase2 = await esperaAi(2, criaAleatorio(0, 3));
    console.log(fase2);
    const fase3 = await esperaAi("fase 3", criaAleatorio(0, 3));
    console.log(fase3);

    console.log("terminamos na fase 3");
  } catch (error) {
    console.log(error);
  }
}
executa();

/*esperaAi("fase 1", criaAleatorio(0, 3))
  .then((valor) => {
    console.log(valor);
    return esperaAi("fase 2", criaAleatorio(0, 3));
  })
  .then((fase) => {
    console.log(fase);
    return esperaAi("fase 3", criaAleatorio(0, 3));
  }).then(fase => {
    console.log(fase);
  }).catch(err => console.log(err));*/
