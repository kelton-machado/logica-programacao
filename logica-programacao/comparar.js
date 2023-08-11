console.log("=== COMPARADOR ===");

const comparar = function () {

  // Entrada
  const n1 = document.getElementById("n1").value ;
  const n2 = document.getElementById("n2").value ;
  const operador = document.getElementById("operador").value;

  // Processamento
  let result;

    switch (operador) {
    
        case '>':
            result = n1 > n2;
            break;

        case '<':
            result = n1 < n2;
            break;

        case '>=':
            result = n1 >= n2;
            break;

        case '<=':
            result = n1 <= n2;
            break;

        case '==':
            result = n1 == n2;
            break;
            
        case '!=':
            result = n1 != n2;
            break;

        default:
            break;
    }

  // Saída
  console.log(result);
  document.getElementById("result").value = result;
};