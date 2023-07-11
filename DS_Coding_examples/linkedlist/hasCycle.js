class Node{
    constructor(val){
        this.next=null;
        this.val=val;
    }
}

var hasCycle = function(head) {
    if(!head){
        return false;
    }

    let currNode = head;
    currNode.pos = 0;
    while(currNode.next){
        const nextNode = currNode.next;
        if(nextNode.pos <= currNode.pos){
            return true;
        }
        nextNode.pos = currNode.pos+1;
        currNode = nextNode;
    }
    return false;
};
const head = new Node(1,0);
const node2 = new Node(2,1);
//head.next = node2;
//node2.next = head;

console.log(hasCycle(head));