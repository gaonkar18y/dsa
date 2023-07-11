function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var getMinimumDifference = function(root) {
    let inOrderRes = [];

    const readInorder= (node)=>{
        node.left && readInorder(node.left);
        inOrderRes.push(node.val);
        node.right && readInorder(node.right);
    }
    
    const getMinimumDiff=(node)=>{
        let min = Number.MAX_VALUE;
        readInorder(node);

        console.log(inOrderRes)

        if(inOrderRes.length==2){
            return inOrderRes[1]-inOrderRes[0];
        }

        for(let i=0;i<inOrderRes.length-1;i++){
            let diff = inOrderRes[i+1]-inOrderRes[i];
            min=Math.min(diff, min);
        }

        return min;
    }

    const result= getMinimumDiff(root);

    if(result === Number.MAX_VALUE){
        return 0;
    }

    return result;
};

[543,384,652,null,445,null,699]


const root = new TreeNode(543);
root.left = new TreeNode(384);
root.right = new TreeNode(652);
root.left.right = new TreeNode(445);
root.right.right = new TreeNode(699);

/*
const root = new TreeNode(1);
root.right = new TreeNode(2);*/


console.log(getMinimumDifference(root))