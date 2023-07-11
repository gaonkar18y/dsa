function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/*
var maxDepth = function (root) {
    if(!root){
        return 0;
    }
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);

    return Math.max(leftMax, rightMax)+1;
};*/

var maxDepth = function name(root) {
    let height = 0;
    const queue = [];
    queue.push(root);
    const result = [];

    while(queue.length!==0){
        height++;
        let size = queue.length;
       
        while(size>0){
            const node =  queue.shift();
            result.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            size--;
        }
    }
    console.log(result);
    return height;
}


const root = new TreeNode(12);
root.left = new TreeNode(6);
root.right = new TreeNode(18);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(14);
root.right.right = new TreeNode(20);

root.right.right.right = new TreeNode(24);

console.log(maxDepth(root));