function findRotatedIndex(arr, n){
    let N = arr.length;
    let low = 0;
    let high = N-1;
    let lastElement = arr[high];

    if(lastElement === n) return high;

    let m = -1;
    while(low<= high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid+1]<arr[mid]){
            m=mid;
            break;
        }

        if(arr[mid]<lastElement){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }

    if(n>arr[m]){
        return -1;
    }

    if(n === arr[m]){
        return m;
    }

    if(n>=arr[0]){
        low = 0;
        high=m-1;
    }else{
        low=m+1;
        high=N-1;
    }

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === n){
         return mid;
        }else if(n>arr[mid]){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }

    return -1;
}

console.log(findRotatedIndex([3,4,1,2],1))

/*console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5
console.log(findRotatedIndex([8,9,1,2,3,4,5,6],2));
console.log(findRotatedIndex([8,9,10,2,3,4,5,6], 6));
console.log(findRotatedIndex([3,4,1,2], 4));*/