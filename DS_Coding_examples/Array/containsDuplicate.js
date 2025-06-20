/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    for(let i=0;i<nums.length;i++){
        let j = i+1;
        while(j<nums.length) {
            if(nums[i] === nums[j]){
                return true;
            }
            j++;
        }
    }
    return false;
};

var containsDuplicateV2 = function(nums) {
    const map = new Map();

    for(let i=0;i<nums.length;i++){
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i], true);
    }
    return nums.length !== map.size;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicateV2([1,2,3,1]))


console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicateV2([1,2,3,4]))