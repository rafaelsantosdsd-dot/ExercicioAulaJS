const leia = require("readline-sync");

let numero
let resultado=0
let continua = true

do {
    numero = leia.questionInt("Digite o valor: ");

    if (numero > 0){
        resultado += numero
    }

    if (numero == 0){
        continua = false
    }

}

while (continua) 

    console.log("A soma dos números positivos é: "+resultado)