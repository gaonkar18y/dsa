function quickSort(arr){
    if(arr.length<2){
        return arr;
    }

    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i]);
        }else {
            rightArr.push(arr[i])
        }
    }
   
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([4,2,8,6,9]));