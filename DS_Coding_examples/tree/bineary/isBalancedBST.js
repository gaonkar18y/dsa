class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    getDepth(root){
        if(!root) return 0;

        const lh = this.getDepth(root.left);
        if(lh === -1) return -1;
        const rh = this.getDepth(root.right);
        if(rh === -1) return -1;
        
        if(Math.abs(lh-rh)>1){
            return -1;
        }
        
        return Math.max(lh,rh)+1;
    }

    isBalanced()
    {
        return (this.getDepth(this.root) != -1);
    }
   
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true
console.log(binarySearchTree.getDepth()); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false*