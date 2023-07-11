
class Stack {
    
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item)
    }

    pop(){
       return this.items.pop()
    }

    top(){
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }
}

class Queue {

    constructor(){
        this.input = new Stack();
        this.output = new Stack();
    }

    enqueue(item){
        this.input.push(item);
    }

    dequeue(){
        if(this.output.isEmpty()){
            while(!this.input.isEmpty()) {
                this.output.push(this.input.pop())
            }
        }
        return this.output.pop()
    }

}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.dequeue());
