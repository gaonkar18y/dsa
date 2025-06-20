function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prevNode = null;
    let node = head;

    while(node){
        if(node.val === val){
            while(node && node.val === val) {
                node = node.next;
            }
            if(prevNode) {
                if(!node){
                    prevNode.next = null;
                } else {
                    prevNode.next = node;
                }
            } else {
                head = node;
            }
        } else {
            prevNode = node;
            node = node.next;
        }
    }

    return head;
};

let head = new ListNode(1);
head.next = new ListNode(1);
/*head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next.next.next = new ListNode(6);*/


head = removeElements(head, 1);

while(head){
    console.log(head.val);
    head = head.next;
}