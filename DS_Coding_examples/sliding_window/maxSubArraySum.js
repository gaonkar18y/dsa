function maxSubArraySum(arr, n) {
    if(n>arr.length){
        return null;
    }
    let result;
    let max = 0;
    for(let i=0;i<n;i++){
        max=max+arr[i];
    }
    result=max;
    for(let i=n;i<arr.length;i++){
        max = max-arr[i-n]+arr[i];
        result=Math.max(max, result);
    }
    return result;
}

console.log(maxSubArraySum([1,2,3,5,61,7,6], 2));