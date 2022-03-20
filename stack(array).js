// let arr =[];


// function ar(arr) {
//     arr.push(1);
//     arr.push(2);
//     arr.push(3);
//     // arr.push(4);
//     // arr.pop();

//     console.log(arr);

// }

// ar(arr)
// function show(arrr) {
//     const i=arrr.length;
//     return arrr[i-1];
// }
// console.log( show(arr));

class stack {
    constructor() {
        this.arr = []
    }

    push(value){
        const array=this.arr;
        array.push(value);
    }


    show(){
        const i=this.arr.length;
        console.log( this.arr[i-1] );
    }

    pop(){
        const array1=this.arr;
        array1.pop(); 
    }
}

const mystack =new stack();

mystack.push(5)
mystack.push(7)
mystack.push(43)
mystack.pop()
mystack.show()