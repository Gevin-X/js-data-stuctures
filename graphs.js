class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.addjecentList  = {};
    }
    addVertex(node) {
        this.addjecentList[node] = [];
        this.numberOfNodes++
    }

    addEdge(node1 , node2){
        this.addjecentList[node1].push(node2);
        this.addjecentList[node2].push(node1)
    }
    showConnection(){

    };
}
const myGraph =new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addEdge('0','2');
myGraph.addEdge('0','1');
myGraph.addEdge('1','2');
console.log(myGraph);