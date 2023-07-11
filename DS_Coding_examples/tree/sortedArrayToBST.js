
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/*
function insert(node, val) {
    if(val<=node.val){
        if(node.left){
            insert(node.left, val);
        }else{
            node.left = new TreeNode(val);
        }
    }else{
        if(node.right){
            insert(node.right, val);
        }else{
            node.right = new TreeNode(val);
        }
    }
}

var sortedArrayToBST = function(nums) {
    const insertOrder = [];
    const insertOrderFn = (arr)=>{
        if(arr.length === 0){
            return;
        }
        if(arr.length === 1){
            insertOrder.push(arr[0]);
            return;
        }

        const middleIndex = parseInt(arr.length/2);
        insertOrder.push(arr[middleIndex]);

        insertOrderFn(arr.slice(0, middleIndex));
        insertOrderFn(arr.slice(middleIndex+1))
    }

    insertOrderFn(nums);

    const root = new TreeNode(insertOrder[0]);

    for(let i=1;i<insertOrder.length;i++){
        insert(root,insertOrder[i]);
    }

    return root;  
};*/


var sortedArrayToBST = function(nums) {
    if(!nums.length){
        return null;
    }

    const middle = Math.floor(nums.length/2);
    const root = new TreeNode(nums[middle]);

    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle+1))

    return root;  
}


//console.log(sortedArrayToBST([-10,-3,0,5,9]));

//[0,1,2,3,4,5]
//[3,1,5,0,2,4]
console.log(sortedArrayToBST([0,1,2,3,4,5]));