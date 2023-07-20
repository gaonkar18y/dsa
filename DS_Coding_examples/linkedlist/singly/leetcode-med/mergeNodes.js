
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} head
* @return {number}
*/
var mergeNodes = function(head) {

    let zeroNode = head;
    let node = head;
    let sum = 0;
    while(node){
        if(node.val !== 0 ){
            sum+=node.val;
            node=node.next;
        }else{
            if(sum>0){
                zeroNode.val = sum;

                if(node.next){
                    zeroNode.next = node;
                    zeroNode = node;
                    node = node.next;
                    sum=0;
                }else{
                    break;
                }
                
            }else{
                node=node.next;
            }
        }
    }
    
    zeroNode.next = null;

    return head;
};

/*const head = new ListNode(0);
head.next = new ListNode(3);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(0);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next.next = new ListNode(0);
console.log(mergeNodes(head));*/

const head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(0);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next.next = new ListNode(0);
console.log(mergeNodes(head));

