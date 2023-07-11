function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length <=1){
        return arr.length;
    }
    let count=0;
    let i=0;
    let j=i+1;

    while(j<arr.length){
        if(arr[i]!==arr[j]){
            count++;
            j++;
            i=j-1;
        }else while( j<arr.length && arr[i]===arr[j]) j++;
    }

    count++;
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,1,1,1,1,1])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
console.log(countUniqueValues([1,2,3]));