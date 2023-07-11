class Node{
    constructor(val){
        this.next=null;
        this.val=val;
    }
}


function printList(head) {
    if(!head){
        return;
    }
    console.log(head.val);
    printList(head.next);
}

function insert(head, node) {
    const newNode = new Node(node.val);
    let currNode = head;
    let previousNode = null;

    while(currNode.val<newNode.val){
        if(!currNode.next){
            currNode.next = newNode;
            return head;
        }
        previousNode = currNode;
        currNode=currNode.next;
    }

    newNode.next = currNode;
    if(previousNode){
        previousNode.next = newNode;
        return head;
    }else{
        return newNode;
    }
}

var mergeTwoLists = function(list1, list2) {
    let currNode = list2;
    list1=insert(list1, currNode);
    while(currNode.next){
        list1=insert(list1, currNode.next);
        currNode=currNode.next;
    }
    
    return list1;
};


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(4);

let list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(4);

//printList(head);
head = mergeTwoLists(head, list2);
printList(head);

//head.next = node2;
//node2.next = head;