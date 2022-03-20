class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newnod = new Node(value)
        if (!this.root) {
            this.root = newnod
            return this
        }

        let currentnode = this.root;

        while (true) {
            if (value > currentnode.value) {
                if (!currentnode.right) {
                    currentnode.right = newnod;
                    return this
                }
                currentnode = currentnode.right;
            } else {
                if (!currentnode.left) {
                    currentnode.left = newnod;
                    return this;
                }
                currentnode = currentnode.left
            }
        }
    }


    lookup(value) {
        let currentnode = this.root
        if (currentnode.value == value) {
            console.log(currentnode);
            return currentnode;
        } else {
            while (true) {
                if (value < currentnode.value) {
                    // if(!currentnode.left){
                    //     console.log(value+'no value in tree ');
                    //     return this;
                    // }
                    // if (currentnode.value == value) {
                    //     console.log('its here');
                    //     return this;
                    // }
                    currentnode = currentnode.left;
                    if (currentnode.value == value) {
                        console.log(currentnode);
                        return this;
                    }
                } else {
                    // if (!currentnode.right){
                    //     console.log(value+' no value like that in array');
                    //     return this
                    // }
                    // if (currentnode.value == value) {
                    //     console.log('its there');
                    //     return this;
                    // }
                    currentnode = currentnode.right;
                    if (currentnode.value == value) {
                        console.log(currentnode);
                        return this;
                    }
                }
            }
        }

    }

    get(value){
        let currentnode = this.root
        if (currentnode.value == value) {
            return currentnode;
        } else {
            while (true) {
                if (value < currentnode.value) {
                    currentnode = currentnode.left;
                    if (currentnode.value == value) {
                        return currentnode;
                    }
                } else {
                    currentnode = currentnode.right;
                    if (currentnode.value == value) {
                        return currentnode;
                    }
                }
            }
        }
    }


    remove(value){
        let currentnode1 = mytree.get(value);
        let currentnode2 = mytree.get(value);
        if (!currentnode2.right){
            const holdingpoint =currentnode2.left;
            currentnode2 = holdingpoint
            return this;
        }
        while (currentnode2) {
            currentnode2 = currentnode2.right;
            if(!currentnode2.left){
                holdingpoint2 = currentnode1.
                currentnode1.value = currentnode2.value
            } 
                
        }
    }

};
    

const mytree = new BinarySearchTree()
mytree.insert(4);
mytree.insert(78);
mytree.insert(35);
mytree.insert(6);
mytree.insert(14);
mytree.insert(73);
mytree.insert(3);
mytree.insert(72);
mytree.insert(75);
mytree.insert(71);

mytree.lookup(35)