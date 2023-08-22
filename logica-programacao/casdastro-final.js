console.log("=== CADASTRO FINAL ===");

let cadastro = [];

const cadastrar = () => {
console.log("cadastrando...");

    //Entrada
    const code = document.querySelector("#code").value;
    const product = document.querySelector("#product").value;
    const qtd = Number(document.querySelector("#qtd").value);
    const price = Number(document.querySelector("#price").value);
    //console.log(code, product, qtd, price);


    //Processamento
    const objeto = {
        code: code,
        product: product,
        qtd: qtd,
        price: price,
        result: (qtd * price)
    }

    cadastro.push(objeto);
    console.table(cadastro);


    const trs = cadastro.map((objeto) => {
        console.log(objeto);
        return  `<tr>
                <td>${objeto.code}</td>
                <td>${objeto.product}</td>
                <td>${objeto.qtd}</td>
                <td>${objeto.price}</td>
                <td>${objeto.result}</td>
            </tr> `  
        
    })
    .join("");

    console.log(trs);

    // Saída
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = trs;

    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.map( (input) => {
        input.value = "";
        return input;
    }) [0].focus();
}



