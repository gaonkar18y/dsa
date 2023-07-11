const addArray = (arr, i) => {
    if( i === (arr.length-1) ) {
        return arr[i];
    }
    return arr[i]+addArray(arr, i+1);
}

const sumArray = (arr)=> {
    return addArray(arr, 0);
}

console.log(sumArray([1,2,3]));