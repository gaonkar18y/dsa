function mergeSortedArray(arr1, arr2) {
    let result = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){

        while(arr2[j]<arr1[i]){
            result.push(arr2[j]);
            j++;
        }

        result.push(arr1[i]);
        i++;

        if(i === arr1.length){
            result = result.concat(arr2.slice(j));
            return result;
        }

        if(j === arr2.length){
            result = result.concat(arr1.slice(i));
            return result;
        }
    }

    return result;

}


function mergeSort(arr) {

    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeSortedArray(left, right);
    
}

console.log(mergeSort([1,3,2,4]))
