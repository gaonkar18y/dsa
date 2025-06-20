function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let node = head;
    const stack = [];
    while(node){
        stack.push(node);
        node = node.next;
    }

   const nodeToRemove = stack[stack.length-n];

   if(nodeToRemove === head) {
     return head.next;
   }

   let preNode = head;
   node = head.next;
   while(node && node !== nodeToRemove){
        preNode = node;
        node = node.next;
   }
   preNode.next = node.next;

   return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
/*head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);*/

head = removeNthFromEnd(head, 2);

while(head){
    console.log(head.val);
    head = head.next;
}