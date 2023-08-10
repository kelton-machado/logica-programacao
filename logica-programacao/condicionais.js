console.log("=== CONDICIONAIS ===");

// Entrada
const nota = Number(prompt("Digite a nota do aluno: "));
let resultado = "";
const corte = 7;
const max = 10;
const min = 0;

// Processamento
if (nota < 5) {
    resultado = "Reprovado";
} else if(nota < corte){
    resultado = "Recuperação";
} else {
    resultado = "Aprovado";
}

//Saída
// console.log(nota);
document.write(`Nota: ${nota} <br> `);
document.write(`Resultado: ${resultado}`);