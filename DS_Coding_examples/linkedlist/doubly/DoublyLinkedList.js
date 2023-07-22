class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head =  this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.tail){
            return;
        }
        const result =  this.tail;
        if(this.tail.prev){
            this.tail = this.tail.prev;
            this.tail.next = null;
            result.prev = null;
        }else{
            this.tail = null;
            this.head = null;
        }

        this.length--;
        return result;
    }

    shift(){
        if(!this.head){
            return;
        }
        const result = this.head;
        if(this.head.next){
            this.head = this.head.next;
            this.head.prev = null;
            result.next = null;
        }else{
            this.tail = null;
            this.head = null;
        }

        this.length--;
        return result;
    }

    unshift(value){
        if(this.length ==0 ){
            return this.push(value);
        }else{
            const node  = new Node(value);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.length++;
            return this;
        }
    }

    get(index){
        if(index<0 || index>= this.length){
            return;
        }

        if(index > this.length/2){
            let count = this.length-index-1;
            let node = this.tail;
            while(count>0){
                node = node.prev;
                count--;
            }
            return node;
        }else{
            let count = 0;
            let node = this.head;
            while(count<index){
                node = node.next;
                count++;
            }
            return node;
        }
    }

    set(index, value){
        const node = this.get(index);
        if(node){
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, value){

        if(index<0 || index>=this.length){
            return;
        }

        if(index === this.length-1){
            return this.push();
        }

        const prevNode = this.get(index-1);
        const newNode = new Node(value);
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        return true;
    }

    remove(index){
        if(index<0 || index>=this.length){
            return;
        }

        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }

        const node = this.get(index);

        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.next = null;
        node.prev=null;

        this.length--;

        return node;
    }

    reverse(){
        let node = this.head;
        let prevNode = null;
        while(node){
            const nextNode = node.next;
            node.next = prevNode;
            node.prev = nextNode;
            prevNode = node;
            node = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    print(){
        const result = [];

        let node = this.head;

        while(node){
            result.push(node.val);
            node=node.next;
        }
        console.log(result);
    }
}
const list = new DoublyLinkedList();
list.push(1).push(2).push(3).push(4);
list.print();
list.reverse();
list.print();
//console.log(list.remove(2));
/*console.log(list.unshift(4));
console.log(list.get(0));
console.log(list.get(1))
list.set(3, 4);
list.insert(2,100);
console.log(list.get(2))
//console.log(list);*/