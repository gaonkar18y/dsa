class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


function printLikedList(node){
    console.log(node.val);
    if(node.next){
        printLikedList(node.next);
    }
}

function reverseLinkedList(node){

    const stack = [node];

    let currNode = node;
    while(currNode.next){
        currNode=currNode.next
        stack.push(currNode);
    }

    let rnode = stack.pop();
    currNode = rnode;
    while(stack.length){
        currNode.next = stack.pop();
        currNode = currNode.next;
    }
    currNode.next =null;

   return rnode;
}


let n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(3);

//printLikedList(n1);

n1 = reverseLinkedList(n1);

printLikedList(n1);



