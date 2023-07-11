
class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function height(root){
        
    if(root === null){
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    if(leftHeight > rightHeight){
        return leftHeight + 1;
    }

    return rightHeight + 1;
}

function printInOrder(root){

    if(root.left){
        printInOrder(root.left)
    }
    console.log(root.val);
    if(root.right){
        printInOrder(root.right);
    }
}

function printPreOrder(root){
    if(!root){
        return;
    }
    console.log(root.val);

    if(root.left){
        printPreOrder(root.left)
    }

    if(root.right){
        printPreOrder(root.right);
   }
}

function printPostOrder(node){
    if(!node){
        return;
    }

    node.left && printPostOrder(node.left);
    node.right && printPostOrder(node.right);
    console.log(node.val);
}

function printBFS(root){

    let queue = [];

    queue.push(root);

    while(queue.length){
        const node = queue.shift();
        console.log(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

}

function printAtLevel(root, level){

    if(!root){
        return;
    }

    if(level === 1){
        console.log(root.val);
        return;
    }

    if(root.left){
        printAtLevel(root.left, level-1)
    }

    if(root.right){
        printAtLevel(root.right, level-1)
    }
}


const root = new TreeNode(12);
root.left = new TreeNode(6);
root.right = new TreeNode(18);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);

root.right.left = new TreeNode(14);
root.right.right = new TreeNode(20);

root.right.right.right = new TreeNode(24);

console.log('height',height(root));
console.log('in order');
printInOrder(root);
console.log('pre order');
printPreOrder(root);
console.log('post order');
printPostOrder(root);
console.log("print bfs");
printBFS(root);

console.log('print level 2')
printAtLevel(root,4);