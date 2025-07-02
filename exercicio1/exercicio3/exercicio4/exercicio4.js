//Importacao
const readline = require("readline-sync");

// Entrada
let codigo = parseInt(readline.question("Código do produto (1 a 6): "));
let quantidade = parseInt(readline.question("Quantidade: "));

let produto = "";
let preco = 0;
let total = 0;

switch (codigo) {
    case 1:
        if (codigo === 1) {
            produto = "Cachorro Quente";
            preco = 10.00;
        }
    case 2:
        if (codigo === 2) {
            produto = "X-Salada";
            preco = 15.00;
        }
    case 3:
        if (codigo === 3) {
            produto = "X-Bacon";
            preco = 18.00;
        }
    case 4:
        if (codigo === 4) {
            produto = "Bauru";
            preco = 12.00;
        }
    case 5:
        if (codigo === 5) {
            produto = "Refrigerante";
            preco = 8.00;
        }
    case 6:
        if (codigo === 6) {
            produto = "Suco de laranja";
            preco = 13.00;
        }
}

if (preco !== 0) {
    total = quantidade * preco;
    console.log("Produto: " + produto);
    console.log("Valor total: R$ " + total);
} else {
    console.log("Código de produto inválido!");
}
