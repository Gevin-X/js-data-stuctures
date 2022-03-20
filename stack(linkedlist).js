class Node {
    constructor(value) {
        this.name = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top);;
    }
    push(value) {
        const newnode = new Node(value);
        if (this.length === 0) {
            this.top = newnode;
            this.bottom = newnode.name;
        } else {
            const hp = this.top;
            //  newnode.next = this.top;
            this.top = newnode;
            this.top.next = hp;

        }
        this.length++
        return this
    }

    pop() {

        this.top = this.top.next;
        this.length--;
        if (this.length == 0) {
            this.bottom = null;
        }
        return this
    }
}

const mystack = new Stack()
mystack.push('Google')
mystack.push('Udemy')
mystack.push('netflix')
mystack.push('zoom')
// mystack.push(63)
mystack.pop()
console.log(mystack);
// mystack.pop();
// mystack.pop()
// mystack.pop()
// mystack.pop()

//console.log( mystack.peek());
//console.log(mystack);

console.log(mystack);