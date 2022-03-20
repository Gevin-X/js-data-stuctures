class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }

    enqueue(value) {
        const newnode = new Node(value)
        if (this.length === 0) {
            this.first = newnode;
            this.last = newnode;
        } else {
            this.last.next = newnode
            this.last = newnode
        }
        this.length++
        return this;
    }

    dequeue() {
        const holding2 = this.first;
        this.first = holding2.next;
        this.length--;
        return this;
    }


}


const myqueue = new Queue()
myqueue.enqueue(5653);
myqueue.enqueue(231);
myqueue.enqueue(34);
myqueue.dequeue();
//myqueue.dequeue();
//myqueue.peek();
console.log(myqueue.peek());
//console.log(myqueue);
//console.log(myqueue);