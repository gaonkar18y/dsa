function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot(arr, start =0, end = arr.length-1) {

    let pivotVal = arr[start];
    let swapIndex  = start;

    for(let j=start+1;j<=end;j++){
        if(arr[j]<pivotVal){
            swapIndex++;
            swap(arr, swapIndex,j)
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
    
}

function quickSort(arr, start =0, end = arr.length-1) {

    if(start >= end){
        return arr;
    }

    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex-1);
    quickSort(arr, pivotIndex+1, end);
    return arr;
}


console.log(quickSort([4,2,8,6,9,1,1,0,0]));