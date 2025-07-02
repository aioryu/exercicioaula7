//Importacao
const readline = require("readline-sync");

// Entrada
let numero = parseInt(readline.question("Digite um número: "));

let resultado = "O Número " + numero + " é ";

// Verifica par ou ímpar
if (numero % 2 === 0) {
    resultado += "par";
} else {
    resultado += "ímpar";
}

// Verifica positivo, negativo ou zero
if (numero > 0) {
    resultado += " e positivo!";
} else if (numero < 0) {
    resultado += " e negativo!";
} else {
    resultado += " e zero!";
}

// Saída
console.log(resultado);