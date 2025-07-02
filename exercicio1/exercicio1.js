const readline = require("readline-sync");

// Entrada dos dados
let A = parseInt(readline.question("Digite o número A: "));
let B = parseInt(readline.question("Digite o número B: "));
let C = parseInt(readline.question("Digite o número C: "));

// Soma de A + B
let soma = A + B;

// Exibe a operação e a comparação
console.log(A + " + " + B + " = " + soma);

// Condições com if/else
if (soma > C) {
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}
