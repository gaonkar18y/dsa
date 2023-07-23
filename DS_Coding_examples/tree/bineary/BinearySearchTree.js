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
}

const bst = new BinearySearchTree();

bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(6);
bst.insert(9);
bst.insert(22)
bst.insert(11);

console.log(JSON.stringify(bst));

console.log(bst.find(11));
console.log(bst.find(15));