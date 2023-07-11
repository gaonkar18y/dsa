
const swap = (arr, x, y) => {
    let t = arr[x];
    arr[x]= arr[y];
    arr[y]= t;
}

const bubbleSort = (arr, n)=> {
    if ( n <= 1 ) {
        return;
    }
    let isSwap = false;
    for(let i=1;i<n;i++){
        if ( arr[i]<arr[i-1]) {
            swap(arr, i, i-1);
            isSwap = true;
        }
    }

    if ( isSwap ) {
       return bubbleSort(arr, n-1);
    }
    return;
}

const bubSort = (arr)=>{
    bubbleSort(arr, arr.length-1);
    return arr;
}

console.log(bubSort([2,1,4]))