
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} head
* @return {number}
*/
var middleNode = function(head) {
    let l = 0;
    let node = head;
    while(node){
        l++;
        node = node.next;
    }
    const mid = Math.floor(l/2);

    l = 0;
    node = head;
    while(l<mid){
        l++;
        node = node.next;
    }

    return node;


};

const head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(1);

console.log(middleNode(head));