var minSubArrayLen = function(target, arr) {
    let result=Infinity;
    let i=0;
    let j=0;
    let sum=arr[i];

    while(j<arr.length){
    
        while(sum<target){
            j++;
            if(j>=arr.length){
                return result === Infinity ? 0 : result;
            }
            sum+=arr[j];
        }
     
        if(sum<target){
            return 0;
        }
       
        let l = (j-i)+1;

        if(l===1){
            return 1;
        }

        result = Math.min(result, l);

        if(sum === target){
            sum-=arr[i];
            i++;
        }else{
            while( i < j  && sum>target){
                sum-=arr[i];
                if(sum>=target) {
                    l--;
                    result = Math.min(result, l);
                }
                i++;
            }
        }
        
    }

    return result;
}


console.log(minSubArrayLen(11, [1,2,3,4,5]));

//console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
//console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
//console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
//console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3

/*console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0*/

/*console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));*/
