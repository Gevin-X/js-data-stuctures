
class Node{
    constructor(value){
    this.value = value,
    this.next = null,
    this.prev=null
    }
}


class  DoublyLinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
           const newnode = new Node(value)
           
            newnode.prev = this.tail
            this.tail.next = newnode;
            this.tail = newnode;
            this.length++;
            return this

        }

    printList(){
        const array1 = [];
        let currentNode2 = this.head
        while(currentNode2 !== null){
            array1.push(currentNode2.value);
            currentNode2 = currentNode2.next
        }
        return array1
    }
    
    prepend(value){
        const newnode2 = new Node(value)
        this.head.prev = newnode2;
        newnode2.next = this.head;
        this.head =newnode2;
        this.length++;
        return this
    }

    insert(index1,value){
        if (index1 >= this.length){
            return this.append(value)
        }
        const newnode3 = new Node(value)
        const leader = this.traverseToIndex(index1-1);
        const holdingPointer = leader.next;
        leader.next = newnode3;
        newnode3.next =holdingPointer;
        newnode3.prev = leader;
        holdingPointer.prev = newnode3
        this.length++;
        return this;
    }

    traverseToIndex(index){
        let counter=0;
        let currentNode = this.head
        while( counter!==index){
            currentNode=currentNode.next;
            counter++
        }
        return currentNode
    }


    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unwanted = leader.next;
        leader.next = unwanted.next;
        unwanted.prev=leader;
        this.length--;
        return this.printList()
    }

    revase(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        console.log(second);
        console.log(first);
        while (second) {
            const third =second.next;
            console.log(third);
            second.next =first;
            console.log(first);
            first = second;
            second = third;
            
        }
        this.head.next =null
        this.head = first;
        return this

    }
}

const myLinkedList = new DoublyLinkedList(12);
myLinkedList.append(5);
myLinkedList.append(28)
myLinkedList.append(34)
myLinkedList.append(42)
myLinkedList.revase()
console.log(myLinkedList);


//console.log( myLinkedList.revase());




//10 --> 5 -->16





// let myLinkedList = {
//     head:
//     {value:10,
//         next:
//         {value:5,
//             next:
//             {value:16,
//                 next:null
//             }
//         }
//     }
// }