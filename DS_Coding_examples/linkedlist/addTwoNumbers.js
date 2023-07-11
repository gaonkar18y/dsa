
class Node{
    constructor(val){
        this.next=null;
        this.val=val;
    }
}

function readLinkedList(l){

    if(!l.next){
        return l.val.toString();
    }

    return l.val.toString()+readLinkedList(l.next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    const num1Str = readLinkedList(l1);
    const num2Str = readLinkedList(l2);
    
    const num1 = BigInt(num1Str.split('').reverse().join(''));
    const num2 = BigInt(num2Str.split('').reverse().join(''));
     
    const result = BigInt(num1+num2).toString();
    const node = new ListNode(result[result.length-1]);
    let currNode = node;
    for(let i=result.length-2;i>=0;i--){
        const newNode = new ListNode(result[i]);
        currNode.next = newNode;
        currNode = newNode;
    }

    return node;

};