class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const node = new Node(value);
        if(this.head === null){
            this.head = this.tail = node;
            this.length = 1;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    remove(index){
        
        if(index<0 || index >= this.length || this.length === 0){
            return undefined;
        }

        let node = this.head;
        let prevNode = null;
        let count=0;
        while(count<index && node.next){
            prevNode = node;
            node = node.next;
            count++;
        }

        if(prevNode){
            prevNode.next = node.next;
        }else{
            this.head = node.next;
        }
        this.length--;
        node.next = null;
        return node;
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length) // 3
console.log(singlyLinkedList.head.val) // 5
console.log(singlyLinkedList.head.next.val) // 10
console.log(singlyLinkedList.head.next.next.val) // 20