import readlinesync = require("readline-sync"); 

const numero: Set<number> = new Set<number>()

for (let i=0; i<10; i++){
    numero.add(readlinesync.questionInt("Digite um número: "))
}
console.log("\nListar dados do Set: ")
for (let num of numero){
    console.log(num)
}