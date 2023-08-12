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

    readInOrder(root) {
        let result = [];
        if (!root) return result;
        const traverse = (node) => {
            node.left && traverse(node.left);
            result.push(node.value);
            node.right && traverse(node.right);
        }

        traverse(root);

        return result;
    }

    insertSorted(arr) {
        if (arr.length === 0) {
            return;
        }
        if (arr.length === 1) {
            this.insert(arr[0]);
            return;
        }

        let mid = Math.floor(arr.length / 2);
        this.insert(arr[mid]);
        this.insertSorted(arr.slice(0, mid));
        this.insertSorted(arr.slice(mid + 1));
    }

    getMininumNode(root = this.root){
        let result = null;
        if(!root) return result;

        const traverse = (node)=>{
            if(!node.left){
                result = node;
            }else{
                traverse(node.left);
            }
        }
        traverse(root);
        return result? new Node(result.value) : result;
    }

    remove(value, node=this.root, parent = null) {
        while (node) {
            if (node.value === value) {
                if (!parent) {
                    root = node.left || node.right;
                    return node;
                } else {
                    if (node.value > parent.value) {
                        if(node.left && node.right) {
                            parent.right = this.getMininumNode(node.right);
                            parent.right.right =  node.right;
                            parent.right.left = node.left;
                            this.remove(parent.right.value, parent.right.right, parent.right);
                        }else{
                            parent.right = node.left || node.right
                        }
                    } else if (node.value < parent.value){
                        if(node.left && node.right) {
                            parent.left = this.getMininumNode(node.right);
                            parent.left.right =  node.right;
                            parent.left.left = node.left;
                            this.remove(parent.left.value, parent.left.right, parent.left);
                        }else{
                            parent.left = node.left || node.right
                        }
                    }else{
                        parent.right = null;
                    }
                }

                return node;
            } else if (value < node.value) {
                parent = node;
                node = node.left;
            }
            else {
                parent = node;
                node = node.right;
            }
        }
        return undefined;
    }
}

/*
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);

console.log(binarySearchTree.remove(50));
console.log(binarySearchTree.root.right.value) // 20
console.log(binarySearchTree.root.right.right) // null

console.log(binarySearchTree.remove(5));
console.log(binarySearchTree.root.left.left.value) // 1
console.log(binarySearchTree.root.left.left.right) // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
 
console.log(binarySearchTree.remove(1));
console.log(binarySearchTree.root.left.left.value) // 5
console.log(binarySearchTree.root.left.left.left) // null
console.log(binarySearchTree.root.left.left.right) // null

console.log(binarySearchTree.remove(20));
console.log(binarySearchTree.root.right.value) // 50
console.log(binarySearchTree.root.right.right) // null
console.log(binarySearchTree.root.right.left) // null

*/
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50)
    .insert(60)
    .insert(30)
    .insert(25)
    .insert(23)
    .insert(24)
    .insert(70);
 
console.log(binarySearchTree.remove(10));
console.log(binarySearchTree.root.left.value) // 12
console.log(binarySearchTree.root.left.left.value) // 1
console.log(binarySearchTree.root.left.left.right.value) // 5
 
console.log(binarySearchTree.remove(50));
console.log(binarySearchTree.root.right.value) // 20
console.log(binarySearchTree.root.right.right.value) // 60
console.log(binarySearchTree.root.right.right.left.value) // 30


/*
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)

console.log(binarySearchTree.remove(85));
console.log(binarySearchTree.root.right.right.value)// 88
console.log(binarySearchTree.root.right.right.right.left.left.value)// 89
*/