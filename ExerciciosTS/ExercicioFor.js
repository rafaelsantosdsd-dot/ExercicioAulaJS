const leia = require("readline-sync");

let num1, num2

num1 = leia.questionInt("Digite o primeiro número do intervalo: ")

num2 = leia.questionInt("Digite o último número do intervalo: ")

if (num2 < num1){
    console.log("Intervalo inválido!")

    process.exit()
}

let contador
for (contador = num1; contador <= num2; contador++) {
    if (contador % 3 == 0 && contador % 5 == 0){
        console.log(contador + " é múltiplo de 3 e 5!")
    }

}
