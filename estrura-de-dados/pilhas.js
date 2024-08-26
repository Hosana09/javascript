class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const pilha = new Stack()
console.log(pilha)
pilha.push(5)
pilha.push(8)
console.log(pilha)
console.log(pilha.peek())
pilha.push(11)
console.log(pilha.size())
console.log(pilha.isEmpty())

