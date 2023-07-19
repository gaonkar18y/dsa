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

    pop(){
        if(!this.head){
            return;
        }

        let currNode = this.head;
        let previousNode = null;
        while(currNode.next){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(previousNode) {
            previousNode.next=null;
            this.tail = previousNode;
            this.length--;
        }else{
            this.tail = null;
            this.head = null;
            this.length = 0;
        }
        
        return currNode;
    }

    shift(){
        if(!this.head) return;
        const result = this.head;
        this.head = result.next;
        if(!this.head) {
            this.tail = null;
        }
        this.length--;
        return result;
    }

    unshift(value){
        const node = new Node(value);
        if(!this.head){
            this.head = this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    getNode(index){
        if( index <0 || index>= this.length) return;

        if(index === (this.length -1)) return this.tail;

        let currNode = this.head;
        let count = 0;
        while(count<index){
           currNode = currNode.next;
           count++;
        }
        return currNode;
    }

    get(index){
        const node =  this.getNode(index);
        if(node){
            return node.val;
        }
    }

    set(index, value){
        const currNode =  this.getNode(index);
        if(currNode){
            currNode.val = value;
            return true;
        }else{
            return false;
        }
    }

    insert(index, value){

        if(index<0 || index> this.length){
            return false
        }

        if(index === 0){
            this.unshift(value);
            return true;
        }

        if(index === this.length){
            this.push(value);
            return true;
        }

        const currNode =  this.getNode(index-1);
        const newNode =  new Node(value);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index<0 || index> this.length){
            return false
        }

        if(index === 0 ){
            return !!this.shift();
        }

        if(index === this.length-1){
            return !!this.pop();
        }

        const prevNode = this.getNode(index-1);
        const currNode = this.getNode(index);
        prevNode.next = currNode.next;
    }

    print(){
        let arr = [];
        let currNode = this.head;
        while(currNode){
            arr.push(currNode.val);
            currNode = currNode.next;
        }
        console.log(arr);
    }

    reverse(){
        let initHead = this.head;
        let node = this.head;
        let prev = null;
        while(node){
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;  
        }

        this.head = prev;
        this.tail = initHead;
    }

}

const list = new SinglyLinkedList();
list.push(1).push(12).push(13);
list.print();
/*list.set(0, 100);
list.insert(1, 20);
console.log(list.get(1));
list.print();
list.remove(1);
console.log(list.get(1));
list.print();*/
list.reverse();
list.print();
/*
console.log(list.get(2));
console.log(list.pop());
console.log(list.shift());
console.log(list);*/