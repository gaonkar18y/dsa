function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var invertTree = function(root) {
    if(!root){
        return root;
    }
    let rootLeft = root.left;
    root.left = root.right;
    root.right = rootLeft;
    
    root.left && invertTree(root.left);
    root.right && invertTree(root.right);
    return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
/*root.right = new TreeNode(7);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);*/

console.log(invertTree(root));

[4,7,2,9,6,3,1]