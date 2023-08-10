console.log("=== IMC ===");



function calcular() {
    //Entrada
    const n1 = Number(document.getElementById("peso").value);
    const n2 = Number(document.getElementById("altura").value);


    //Processamento

    let result = (n1/(n2*n2)).toFixed(2);

    if (result <= 18.5) {
        document.getElementById("parecer").textContent = "Baixo peso"
    } else if(result > 18.5 && result <= 24.9) {
        document.getElementById("parecer").textContent = "Peso Normal"
    }else if(result > 24.9 && result <= 29.9) {
        document.getElementById("parecer").textContent = "Sobrepeso"
    }else if(result > 29.9 && result <= 34.9) {
        document.getElementById("parecer").textContent = "Obesidade Grau I"
    }else if(result > 34.9 && result <= 39.9) {
        document.getElementById("parecer").textContent = "Obesidade Grau II"
    }else{
        document.getElementById("parecer").textContent = "Obesidade Grau III"
    }

    //Saída
    document.getElementById("imc").value = result
    console.log(result);

}


