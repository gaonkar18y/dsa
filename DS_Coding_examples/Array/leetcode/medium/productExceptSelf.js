/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*function getTotal(arr, excludeIndex){
   return arr.reduce((acc,v, index)=> {
        if(index === excludeIndex){
            return acc;
        }
        return acc*v;
    }, 1);
}

var productExceptSelf = function(nums) {
    return nums.map((v, index)=> {
        const total = getTotal(nums, index);

        if(total==0){
            return 0;
        }

        return total;
    });
};
var productExceptSelf = function(nums) {
    let zeros=0;
    const total = nums.reduce((acc,v)=> {
        if(v == 0){
            zeros++;
            return acc;
        }
        return acc*v;
    }, 1);
     return nums.map((v)=> {
        if(zeros>1){
            return 0;
        }else if(zeros === 1){

            if(v==0){
                return total;
            }else return 0;

        }else return total/v;

     });
 };*/



 var productExceptSelf = function(nums) {
    // Set up an empty array as our result
    const result = []
    
    // Initialize a prefix tracker at 1
    let prefix = 1
    
    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.
    
    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    console.log(result);
    
    // Initialize a suffix tracker at 1
    let suffix = 1
    
    // Loop backwards through the array.
    // For each iteration, set the result array to be 
    // the product of itself multiplied by the suffix tracker.
    
    // Then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position.
    for (let i=nums.length - 1; i>=0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    console.log(result);

    return result
};
//console.log(productExceptSelf([1,2,3]));
console.log(productExceptSelf([-1,1,0,-3,3,4,67,8,99,88]));