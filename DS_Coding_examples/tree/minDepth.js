/**
 * Definition for a binary tree node.
 *  */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if(!root){
        return 0;
    }
    let minDepth = Infinity;

    const traverse = (node, level) => {
        if(!node.left && !node.right){
            minDepth = Math.min(level, minDepth);
        }
        if (node.left) {
            traverse(node.left, level+1);
        }
      
        if (node.right) {
            traverse(node.right, level+1)
        }
    }

    traverse(root, 1);
    return minDepth;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(5);
root.left.left.right = new TreeNode(6);
root.right.left = new TreeNode(7);

console.log(minDepth(root))