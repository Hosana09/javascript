class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack underflow");
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      console.log(this.items);
    }
}
  
function moveDisk(from, to) {
const disk = from.pop();
to.push(disk);
console.log(`Move disco ${disk} de ${from.name} para ${to.name}`);
}
  
function solveHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        moveDisk(source, target);
    } else {
        // Mover os n-1 discos da pilha fonte para a auxiliar
        solveHanoi(n - 1, source, auxiliary, target);
        // Mover o disco restante para a pilha alvo
        moveDisk(source, target);
        // Mover os n-1 discos da pilha auxiliar para a pilha alvo
        solveHanoi(n - 1, auxiliary, target, source);
    }
}

const P1 = new Stack();
P1.name = "P1";
  
const P2 = new Stack();
P2.name = "P2";
  
const P3 = new Stack();
P3.name = "P3";
  
P1.push(3); // Disco grande
P1.push(2); // Disco médio
P1.push(1); // Disco pequeno
  
console.log("Estado inicial:");
console.log("P1:");
P1.printStack();
console.log("P2:");
P2.printStack();
console.log("P3:");
P3.printStack();
  
console.log("\nMovimentações:");
solveHanoi(3, P1, P3, P2);
  
console.log("\nEstado final:");
console.log("P1:");
P1.printStack();
console.log("P2:");
P2.printStack();
console.log("P3:");
P3.printStack();
  