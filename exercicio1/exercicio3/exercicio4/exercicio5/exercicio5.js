//Importacao
const readline = require("readline-sync");

// Entrada de dados
let nome = readline.question("Nome do colaborador: ");
let codigo = parseInt(readline.question("Cargo (1 a 6): "));
let salario = parseFloat(readline.question("Salário: "));

let cargo = "";
let reajuste = 0;

// Switch sem break
switch (codigo) {
    case 1:
        if (codigo === 1) {
            cargo = "Gerente";
            reajuste = 0.10;
        }
    case 2:
        if (codigo === 2) {
            cargo = "Vendedor";
            reajuste = 0.07;
        }
    case 3:
        if (codigo === 3) {
            cargo = "Supervisor";
            reajuste = 0.09;
        }
    case 4:
        if (codigo === 4) {
            cargo = "Motorista";
            reajuste = 0.06;
        }
    case 5:
        if (codigo === 5) {
            cargo = "Estoquista";
            reajuste = 0.05;
        }
    case 6:
        if (codigo === 6) {
            cargo = "Técnico de TI";
            reajuste = 0.08;
        }
}

// Verificação e saída
if (cargo !== "") {
    let novoSalario = salario + (salario * reajuste);
    console.log("\nNome do colaborador: " + nome);
    console.log("Cargo: " + cargo);
    console.log("Salário: R$ " + novoSalario);
} else {
    console.log("Código de cargo inválido!");
}