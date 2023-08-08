class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    } 
    enqueue(val){
      const newNode = new Node(val);
      if(!this.first){
          this.first = this.last = newNode;
      }else{
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
    }
}

var queue = new Queue();
queue.enqueue(10) // 1
queue.size // 1
queue.enqueue(100) // 2
queue.size // 2
queue.enqueue(1000) // 3
queue.size // 3

console.log(queue);