
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let strNum = "";
    let currNode = head;

    while(currNode){
        strNum+=currNode.val;
        currNode = currNode.next;
    }

    return parseInt(strNum,2)
};

const head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(1);

console.log(getDecimalValue(head));