class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    size() {
        return this.count - this.lowestCount
    }

    isEmpty() {
        return this.size() === 0
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else {
            if (this.lowestCount > 0) {
                this.lowestCount--
                this.items[this.lowestCount] = element
            } else {
                for (let i = this.count; i > 0; i--) {
                    this.items[i] = this.items[i-1]
                }
                this.count++
                this.lowestCount = 0
            }
        }
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return result
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count]
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
    }
}

function hotPotato(elementList, num) {
    const deque = new Deque()
    const eliminatedList = []
    for (let i = 0; i < elementList.length; i++) {
        deque.addBack(elementList[i])
    }
    while (deque.size() > 1) {
        for (let i = 0; i < num; i++) {
            deque.addBack(deque.removeFront())
        }
        eliminatedList.push(deque.removeFront())
    }
    return {
        eliminated: eliminatedList,
        winner: deque.removeFront()
    }
} 

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)

result.names.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
})

console.log(`The winner is: ${result.winner}`)