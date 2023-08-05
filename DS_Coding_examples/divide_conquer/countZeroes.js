function countZeroes(arr){
    const N = arr.length;
    if(N === 0 || arr[N-1] === 1){
        return 0;
    }

    if(arr[0] === 0){
        return N;
    }

    let low = 0;
    let high = N-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === 1 && arr[mid+1] === 0){
            return N-mid-1;
        }

        if(arr[mid]===0 && arr[mid-1] === 1){
            return N-mid;
        }

        if(arr[mid] === 0){
            high=mid-1;
        }else{
            low = mid+1
        }
    }

    return 0;
}


console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0
console.log(countZeroes([1,1,1,1,0,0,0,0,0,0,0,0])) // 4