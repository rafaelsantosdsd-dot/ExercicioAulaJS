import { Stack } from "./Stack";
import leia = require("readline-sync");

const pilha = new Stack<string>(); 

let opcao
do{ 
console.log("*********************************")
console.log("\n1 - Adicionar livro na pilha  ")
console.log("\n2 - Listar todos os livros   ")
console.log("\n3 - Retirar livro da pilha     ")
console.log("\n0 - Sair                       ")
console.log("\n*********************************")
console.log("\nEntre com a opção desejada:  ")

opcao = leia.questionInt()

switch (opcao){
    case 1:
     const nome = leia.question("Digite o nome do livro: ") 
        console.log("\n") 
        pilha.push(nome) 
        pilha.printStack() 
        console.log("\nLivro adicionado!") 
        break;

    case 2: 
        console.log("\nLista de livros: ") 
        pilha.printStack() 
        break;

    case 3: 
        const retirar = pilha.pop() 
        if (retirar) {
            console.log("\nLivro removido!")
            pilha.printStack() 
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


