import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>(); 

let opcao
do{ 
console.log("*********************************")
console.log("\n1 - Adicionar Cliente na fila  ")
console.log("\n2 - Listar todos os Clientes   ")
console.log("\n3 - Retirar Cliente da Fila     ")
console.log("\n0 - Sair                       ")
console.log("\n*********************************")
console.log("\nEntre com a opção desejada:  ")

opcao = leia.questionInt()

switch (opcao){
    case 1:
     const nome = leia.question("Digite seu nome: ") 
        console.log("\n") 
        fila.enqueue(nome) 
        fila.printQueue() 
        console.log("\nCliente adicionado!") 
        break;

    case 2: 
        console.log("\nLista de Clientes: ") 
        fila.printQueue() 
        break;

    case 3: 
        const retirar = fila.dequeue() 
        if (retirar) {
            console.log("\nVocê foi chamado!")
            fila.printQueue() 
        } 
        break;

    case 0:
    console.log("\nPrograma Finalizado!")
    break;

    default:
    console.log("\nOpção Inválida! - Escolha uma das opções do menu:")
        break;
}
  } while(opcao !== 0) 


