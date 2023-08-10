console.log("=== CONDICIONAIS ===");

// Entrada
const nota = Number(prompt("Digite a nota do aluno: "));
let resultado = "Reprovado";
const corte = 7;
const max = 10;
const min = 0;

// Processamento
if (nota >= corte) {
    resultado = "Aprovado";
}
if (nota > max) {
    resultado = "Nota Inválida";
}
if (nota < min) {
    resultado = "Nota Inválida";
}

//Saída
// console.log(nota);
document.write(`Nota: ${nota} <br> `);
document.write(`Resultado: ${resultado}`);