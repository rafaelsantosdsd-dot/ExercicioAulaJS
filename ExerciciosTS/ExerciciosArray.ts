import readlinesync = require("readline-sync"); 

const cores: Array<string> = new Array<string>()

for (let i=0; i<5; i++){
    cores.push(readlinesync.question("Digite uma cor: "))
}
console.log("\nListar todas as cores: ")
for (let cor of cores){
    console.log(cor)
}

cores.sort()
console.log("\nOrdenar cores: ")
for (let cor of cores){
    console.log(cor)
}


