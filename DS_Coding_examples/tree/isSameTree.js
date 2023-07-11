function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function readLevelOrderTree(root) {
    if(!root){
        return [];
    }
    const result=[];
    const queue=[];
    queue.push(root);

    while(queue.length){
        const node = queue.shift();
        if(node){
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }else{
            result.push(null);
        }
        
    }

    return result;
}

/*var isSameTree = function(p, q) {
    
    const pList = readLevelOrderTree(p);
    const qList = readLevelOrderTree(q);

    console.log(qList, pList);

    if(pList.length!==qList.length){
        return false
    }


    for(let i=0;i<pList.length;i++){
        if(pList[i] !== qList[i]){
            return false
        }
    }

    return true;
};*/


var isSameTree = function(p, q) {
    if(!p && !q){
        return true;
    }

    if(!p || !q || p.val !== q.val){
        return false;
    }

    return isSameTree(p.left , q.left) && isSameTree(p.right, q.right);
}




const root = new TreeNode(12);
root.left = new TreeNode(6);
root.right = new TreeNode(18);

const root2 = new TreeNode(12);
root2.left = new TreeNode(6);
root2.right = new TreeNode(18);

console.log(isSameTree(root, root2));