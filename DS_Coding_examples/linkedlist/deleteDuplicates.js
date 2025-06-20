function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    let prevVal = head.val;
    let pointer = head.next;
    let prev = head;

    while(pointer) {
        if (prevVal === pointer.val){
           
            let tempP = pointer;
           while(tempP && tempP.val === prevVal){
            tempP = tempP.next;
           }

           if(tempP) {
            pointer.val = tempP.val;
            pointer.next = tempP.next;
           } else {
            prev.next = null;
            pointer = undefined;
           }
        } else {
            prev = pointer;
            prevVal = pointer.val;
            pointer = pointer.next;
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

head = deleteDuplicates(head);

while(head){
    console.log(head.val);
    head = head.next;
}
