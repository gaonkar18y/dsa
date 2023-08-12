
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

function getMininumNode(root){
    let result = null;
    if(!root) return result;

    const traverse = (node)=>{
        if(!node.left){
            result = node;
        }else{
            traverse(node.left);
        }
    }
    traverse(root);
    return result? new TreeNode(result.val) : result;
}

var deleteNode = function(root, value) {
let node = root;
let parent = null;
 while (node) {
        if (node.val === value) {
            if(node.left && node.right) {
                const rightMinNode = getMininumNode(node.right);
                if(parent){
                    if (node.val > parent.val) {
                        parent.right = rightMinNode;
                        parent.right.left = node.left;
                        if(node.right.left || node.right.right){
                             parent.right.right = deleteNode(node.right, rightMinNode.val);
                        }
                    }else{
                        parent.left = rightMinNode;
                        parent.left.left = node.left;
                        if(node.right.left || node.right.right){
                             parent.left.right =  deleteNode(node.right, rightMinNode.val);
                        }
                    }
                }else{
                    root = rightMinNode;
                    root.left = node.left;
                    if(node.right.left || node.right.right){
                        root.right = deleteNode(node.right, rightMinNode.val);
                   }
                }
            }else{
                if(parent){
                    if (node.val > parent.val) {
                        parent.right = node.left || node.right
                    }else{
                        parent.left = node.left || node.right
                    }
                }else{
                    root = node.left || node.right;
                }
            }
         return root;
        } else if (value < node.val) {
            parent = node;
            node = node.left;
        }
        else {
            parent = node;
            node = node.right;
        }
    }
    return root;
};


const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6)

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

console.log(deleteNode(root, 5));