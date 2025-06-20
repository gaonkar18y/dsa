/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;

    if(n === 1){
        if(target === nums[0]){
            return 0;
        }
        return -1;
    }
    
    if(nums[0] > nums[n-1]) {
        if(target > nums[n-1] && target < nums[0]){
            return -1;
        }

        if(target > nums[n-1] && target >= nums[0]){
            let i = 0;
            while(target>=nums[i]){
                if(target === nums[i]){
                    return i;
                }
                i++;
            }
        }

        if(target <= nums[n-1]){
            let i = n-1;
            while(target<=nums[i]){
                if(target === nums[i]){
                    return i;
                }
                i--;
            }
        }
    } else {
        if(target<nums[0] || target > nums[n-1]){
            return -1;
        }

        for(let i=0;i<Math.ceil(n/2);i++){
            if(target === nums[i]){
                return i;
            }
            if(target===nums[n-1-i]){
                return n-1-i;
            }
        }
    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2],0));

console.log(search([4,5,6,7,0,1,2],3));

console.log(search([1],0));

console.log(search([1,3],2));

console.log(search([3,1],1));

