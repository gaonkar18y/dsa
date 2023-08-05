function sortedFrequency(arr, n){
   let N = arr.length;

   if( N === 0 || n<arr[0] || n>arr[N-1]){
        return -1;
   }

   let low = 0;
   let high = N-1;

   while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid] === n){
        let count=1;
        let i=mid-1;
        while(arr[i] === n && i>=0 ){
            count++;
            i--;
        }

        i=mid+1;
        while(arr[i] === n && i<N){
            count++;
            i++;
        }
        return count;
    }else  if(n < arr[mid]){
        high=mid-1;
    }else{
        low=mid+1;
    }

   }
   return -1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1