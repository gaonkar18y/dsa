class Node {
    constructor(value, priority){
        this.val = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let idx = this.values.length;
        const newNode = new Node(val, priority);
        this.values.push(newNode);

        while(idx>0){
            let parentIndx = Math.floor((idx-1)/2);
            let parent = this.values[parentIndx];
            if(priority>=parent.priority) break;
            this.values[parentIndx] = newNode;
            this.values[idx] = parent;
            idx = parentIndx;
        }
    }

    swap(idx1, idx2){
       let t =  this.values[idx1];
       this.values[idx1] = this.values[idx2];
       this.values[idx2] = t;
    }

    dequeue(){
        this.swap(0, this.values.length-1);
        const oldRoot  = this.values.pop();

        let idx = 0;
        let root = this.values[idx].priority;

        while((2*idx +2) < this.values.length){
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx +2;
            let leftChild = this.values[leftChildIdx].priority;
            let rightChild = this.values[rightChildIdx].priority;

            if(root <= leftChild && root<= rightChild) break;

            if(leftChild < root && rightChild < root){
                if(leftChild<rightChild){
                    this.swap(idx, leftChildIdx);
                    idx = leftChildIdx;
                }else{
                    this.swap(idx, rightChildIdx);
                    idx = rightChildIdx;
                }
            }else if(leftChild < root){
                this.swap(idx, leftChildIdx);
                idx = leftChildIdx;
            }else if(rightChild < root){
                this.swap(idx, rightChildIdx);
                idx = rightChildIdx;
            }

            root = this.values[idx].priority;
        }

        return oldRoot;
    }
}

const binaryHeap = new PriorityQueue();

binaryHeap.enqueue(1, 5)
binaryHeap.enqueue(2, 4)
binaryHeap.enqueue(3, 6)
binaryHeap.enqueue(4, 1)
binaryHeap.enqueue(5, 2)
binaryHeap.enqueue(6, 3)
console.log(binaryHeap.dequeue())
console.log(binaryHeap.values);
 
console.log(binaryHeap.dequeue())
console.log(binaryHeap.values);
 
console.log(binaryHeap.dequeue())
console.log(binaryHeap.values);