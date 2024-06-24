//EXE: trocar os valores de varA, varB e varC 


let varA = "a"; //b
let varB = "b"; //c
let varC = "c"; //a


 //utilizando uma nova variavel para armazenar o valor anterior de varA
const varAtemp=varA;
varA = varB;
varB = varC;
varC = varAtemp;

//utilizando arrays


[varA, varB, varC] = [varB, varC, varA];



console.log(varA, varB, varC);