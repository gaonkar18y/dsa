function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(!head || !head.next){
        return head;
    }

    let arrOfStacks = [];
    let node = head;
    let stack = [];
    while(node){
        if(stack.length === 2){
            arrOfStacks.push(stack);
            stack = [];
        }
        stack.push(node);
        node = node.next;
    }
    arrOfStacks.push(stack);

    let newHead = null;
    node = null;

    while(arrOfStacks.length){
        const stack = arrOfStacks.shift();
        const n1 = stack.pop();
        const n2 = stack.pop();
        n1.next = null;
        if(n2) n2.next = null;
        if(!newHead){
            newHead = n1;
        } else {
            node.next = n1;
        }
        if(n2) n1.next = n2;
        node = n2;
    }

    return newHead;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);//
//head.next.next.next.next = new ListNode(5);

let node = swapPairs(head);

console.log(node)

while(node){
    console.log(node.val);
    node = node.next;
}