console.log("PROGRAMA")

function converter() {

    // Entrada
    let nome = document.getElementById("nome").value;
    //console.log(nome)


    //Processamento
    nome = nome.toUpperCase()
    

    //Saída
    document.getElementById("resultado").textContent = nome
}