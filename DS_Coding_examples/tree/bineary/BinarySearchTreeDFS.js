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
    DFSPreOrder() {
        let result = [];
        
        if(!this.root) return result;
        
        const traverse = (node)=>{
            result.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        
        traverse(this.root);
        
        return result;
    }
    depthFirstSearchInOrder() {
        let result = [];
        if(!this.root) return result;
        const traverse = (node)=>{
            node.left && traverse(node.left);
            result.push(node.value);
            node.right && traverse(node.right);
        }
        
        traverse(this.root);
        
        return result;
    }
    depthFirstSearchPostOrder() {
        let result = [];
        if(!this.root) return result;
        const traverse = (node)=>{
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            result.push(node.value);
        }
        
        traverse(this.root);
        
        return result;
    }
  }
  

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree.DFSPreOrder()) // [15, 10, 1, 5, 12, 20, 50]