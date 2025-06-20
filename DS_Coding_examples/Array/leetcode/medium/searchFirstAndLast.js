/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const n = nums.length;

    if(n===0) {
        return [-1,-1];
    }

    if(n===1) {
        if(target === nums[0]) {
            return [0,0];
        }
        return [-1,-1];
    }

    if(target<nums[0] || target>nums[n-1]){
        return [-1,-1];
    }

    for(let i=0;i<n;i++){
        if(target===nums[i]){
            let j=i+1;
            while(j<n && nums[j] === target){
               j++;
            }
            j--;
            return [i,j]
        }
    }

    return [-1,-1];
};


console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([5,7,7,8,8,10],6))
console.log(searchRange([],0))

//Output: [3,4]
//Output: [-1,-1]
//Output: [-1,-1]