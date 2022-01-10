let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let trocador;

trocador = varC;

/* Forma Antiga de fazer
varC = varA
varA = varB
varB = trocador
*/

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)