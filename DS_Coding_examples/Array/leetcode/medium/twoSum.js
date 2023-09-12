var twoSum = function(numbers, target) {
    const l = numbers.length;
    for(let i=0;i<l-1;i++){
        let num = target-numbers[i];

        let low = i+1;
        let high = l-1;

        let nextIndex = -1;

        while(low<= high){
            const mid = Math.floor((low+high)/2);

            if(num === numbers[mid]){
                nextIndex = mid;
                break;
            }

            if(num>numbers[mid]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }

        if(nextIndex !== -1){
            return [i+1, nextIndex+1];
        }
    }
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
console.log(twoSum([-1,0],-1));
