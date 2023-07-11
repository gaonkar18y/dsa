function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function(root) {

    if(!root){
        return true;
    }

    const queue = [];
    queue.push(root);

    while(queue.length){
        let size = queue.length;
        const result = [];
        while(size>0){
            const node = queue.shift();
            if(node){
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }else{
                result.push(null);
            }
           size--;
        }
        if(result.length>1){
            for(let i=0;i<result.length/2;i++){
                if(result[i]!==result[result.length-1-i]){
                    return false;
                }
            }
        }
    }

    return true;
    
};

/*
const root = new TreeNode(1);
root.left = new TreeNode(2);

console.log(isSymmetric(root));*/

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);


console.log(isSymmetric(root));

