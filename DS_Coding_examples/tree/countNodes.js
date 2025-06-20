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
var countNodes = function(root) {
    let count = 0;

    const traverse = (node) =>{
        if(!node) {
            return;
        }
        count+=1;
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return count;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(5);
root.left.left.right = new TreeNode(6);

console.log(countNodes(root));