const leia = require("readline-sync");

let continua = true;
let menor21 =0
let maior50 =0


while (continua) {
    let numero = leia.questionInt("Digite uma idade: ");

    if(numero < 21 && numero > 0){
        menor21 ++
    }

    else if (numero > 50){
        maior50 ++
    }

    else if (numero < 0){
        continua = false
    }

}

console.log("Total de pessoas menores de 21 anos: "+menor21)
console.log("Total de pessoas maiores de 50 anos: "+maior50)

