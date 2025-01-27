const pessoas = [
    {id: 8, name: 'kelvin',},
    {id: 7, name: 'joao',},
    {id: 6, name: 'maria',},
    {id: 5, name: 'junin',},
    {id: 4, name: 'carlos',},
    {id: 3, name: 'alberto',},
    {id: 2, name: 'lucas',},
    {id: 1, name: 'julia',},


]

//const novasPessoas = {};
//for (const pessoa of pessoas){
//    const {id} = pessoa;
//    novasPessoas[id] = {...pessoa};
//}
//
//console.log(novasPessoas); 
const novasPessoas = new Map ();

for (const pessoa of pessoas){
    novasPessoas.set(pessoa.id, {...pessoa});
}
console.log(novasPessoas); 