function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



var hasPathSum = function(root, targetSum) {

    const traverseSum = (node, sum)=>{
        if(!node){
            return false;
        }

        sum+=node.val;
        if(!node.left && !node.right){
            return sum===targetSum;
        }

       return traverseSum(node.left, sum) || traverseSum(node.right, sum);
    }

    return traverseSum(root, 0)
    
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

/*
root.left.left = new TreeNode(11);
//root.left.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);

root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right.right.right = new TreeNode(1);
*/


console.log(hasPathSum(null, 5))