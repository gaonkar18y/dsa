function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



function readInOrder(root, k){
    const result = new Set();

    const traverse = (node)=>{
        if(!node) return;
        node.left && traverse(node.left);
        result.size<k && result.add(node.val);
        node.right && result.size<k && traverse(node.right);
    }

    traverse(root);

    return Array.from(result).sort();
}

var findSecondMinimumValue = function(root) {
    if(!root) return -1;
    const values = readInOrder(root, 2);
    return values[1] || -1;
};


function readPostOrder(root, k){
    const result = new Set();

    const traverse = (node)=>{
        if(!node) return;
        node.right && traverse(node.right);
        result.size<k && result.add(node.val);
        node.left && result.size<k && traverse(node.left);
    }

    traverse(root);

    return Array.from(result);
}

function kthLargest(root, k){
    if(!root) return -1;
    return readPostOrder(root, k).pop();
}

const root = new TreeNode(5);
root.left = new TreeNode(8);
root.right = new TreeNode(5)
/*root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);*/

console.log(findSecondMinimumValue(root, 1));