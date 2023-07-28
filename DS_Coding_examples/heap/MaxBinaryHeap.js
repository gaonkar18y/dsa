class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(val){
        let idx = this.values.length;
        this.values.push(val);

        while(idx>0){
            let parentIndx = Math.floor((idx-1)/2);
            let parent = this.values[parentIndx];
            if(val<=parent) break;
            this.values[parentIndx] = val;
            this.values[idx] = parent;
            idx = parentIndx;
        }
    }

    swap(idx1, idx2){
       let t =  this.values[idx1];
       this.values[idx1] = this.values[idx2];
       this.values[idx2] = t;
    }

    extractMax(){
        this.swap(0, this.values.length-1);
        const oldRoot  = this.values.pop();

        let idx = 0;
        let root = this.values[idx];

        while((2*idx +2) < this.values.length){
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx +2;
            let leftChild = this.values[leftChildIdx];
            let rightChild = this.values[rightChildIdx];

            if(root >= leftChild && root >= rightChild) break;

            if(leftChild > root && rightChild > root){
                if(leftChild>rightChild){
                    this.swap(idx, leftChildIdx);
                    idx = leftChildIdx;
                }else{
                    this.swap(idx, rightChildIdx);
                    idx = rightChildIdx;
                }
            }else if(leftChild > root){
                this.swap(idx, leftChildIdx);
                idx = leftChildIdx;
            }else if(rightChild > root){
                this.swap(idx, rightChildIdx);
                idx = rightChildIdx;
            }

            root = this.values[idx];
        }

        return oldRoot;
    }
}

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
console.log(binaryHeap.values[0]) // 5
 
console.log(binaryHeap.values) // [5,4,2,1,3])
 
console.log(binaryHeap.extractMax())
console.log(binaryHeap.values) // [4,3,2,1])
 
console.log(binaryHeap.extractMax())
console.log(binaryHeap.values) // [3,1,2])