function insertionSort(arr) {
    
    for(let i=1;i<arr.length;i++){
        let currVal = arr[i];
        let j=i-1;
        for(;j>=0 && arr[j] > currVal;j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = currVal;
    }

    return arr;
}

console.log(insertionSort([4,2,8,6,9]));