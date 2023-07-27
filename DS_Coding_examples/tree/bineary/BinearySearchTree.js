class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinearySearchTree{
    constructor(){
        this.root = null;
    }

    insertNode(root, newNode){
        if(newNode.value === root.value){
            return;
        }
        if(newNode.value < root.value){
            if(root.left){
                this.insertNode(root.left, newNode)
            }else{
                root.left = newNode;
            }
        }else{
            if(root.right){
                this.insertNode(root.right, newNode);
            }else{
                root.right = newNode;
            }
        }
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }else{
            let currNode = this.root;

            while(true){
                if(value === currNode.value){
                    return;
                }
                if(value<currNode.value){
                    if(!currNode.left){
                        currNode.left = newNode;
                        return;
                    }
                    currNode = currNode.left;
                }else{
                    if(!currNode.right){
                        currNode.right = newNode;
                        return;
                    }
                    currNode = currNode.right;
                }
            }
        }
    }

    find(value){
        if(!this.root){
            return null;
        }

        let node = this.root;

        while(true){
            if(node.value === value){
                return node;
            }

            if(value < node.value){
                if(!node.left){
                    return null;
                }
                node = node.left;
            }else{
                if(!node.right){
                    return null;
                }
                node = node.right;
            }
        }
    }

    bfs(){
        const result = [];
        const queue = [];

        if(this.root) queue.push(this.root);

        while(queue.length>0){
            const node = queue.shift();
            result.push(node.value);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        return result;
    }

    dfsPreOrder(){
        const result = [];

        const traverse = (node)=>{
            if(!node) return;
            result.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        };

        traverse(this.root);
        return result;
    }

    dfsPostOrder(){
        const result = [];

        const traverse = (node)=>{
            if(!node) return;
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            result.push(node.value);
        };

        traverse(this.root);
        return result;
    }

    dfsInOrder(){
        const result = [];

        const traverse = (node)=>{
            if(!node) return;
            node.left && traverse(node.left);
            result.push(node.value);
            node.right && traverse(node.right);
        };

        traverse(this.root);
        return result;
    }


}

const bst = new BinearySearchTree();

bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(6);
bst.insert(9);
bst.insert(22)
bst.insert(11);

console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());

/**
 *           10
 *      8         12
 *   6     9   11     22
 */

/*console.log(JSON.stringify(bst));

console.log(bst.find(11));
console.log(bst.find(15));*/