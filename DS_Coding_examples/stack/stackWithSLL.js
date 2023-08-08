class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        const node = new Node(val);
        if(this.size === 0){
            this.first = this.last = node;
        }else{
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(this.size === 0){
            return undefined;
        }
        let v = this.first.value;
        this.first = this.first.next;
        this.size--;
        if(this.size<=1){
            this.last = this.first;
        }
        return v;
    }
}


var stack = new Stack();
 
stack.push(10);
stack.push(100);
stack.push(1000);
console.log(stack)
var removed = stack.pop();
console.log(removed) // 1000
console.log(stack.size) // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size); // 0