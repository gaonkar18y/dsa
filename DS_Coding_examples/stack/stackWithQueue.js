class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(val) {
        this.q1.enqueue(val);
        return this;
    }
    pop() {
        if(this.q1.size <= 1){
            return this.q1.dequeue();
        }

        while(this.q1.size !== 1 ){
            this.q2.enqueue(this.q1.dequeue());
        }

        const r =  this.q1.dequeue();

        let t = this.q2;
        this.q2 = this.q1;
        this.q1 = t;

        return r;
    }
}


var s = new Stack()
s.push(10).push(20).push(30)
console.log(s.pop()) // 30
console.log(s.pop()) // 20
console.log(s.pop()) // 10
console.log(s.pop()) // null
s.push(30).push(40).push(50);
console.log(s.pop()) // 50
console.log(s.push(60))
console.log(s.pop()) // 60