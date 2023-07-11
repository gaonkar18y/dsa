function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



var averageOfLevels = function(root) {
    if(!root){
        return 0;
    }

    const queue=[];
    queue.push(root);
    const result = [];

    while(queue.length){
        let sum = 0;
        const levelSize = queue.length;
        let size = levelSize;
        while(size>0){
            const node = queue.shift();
            sum+=node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            size--;
        }
        result.push((sum/levelSize).toFixed(5));
    }

    return result;
};

[3,9,20,null,null,15,7]

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(averageOfLevels(root));
