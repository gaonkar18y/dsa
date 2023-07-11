var twoSum = function(nums, target) {
    
    let numsMap = new Map();
    
    for(let i=0;i<nums.length;i++){
       
       let d = target - nums[i];
        if ( numsMap.has(d)){
            return [numsMap.get(d), i]
        }else {
            numsMap.set(nums[i], i);
        }
        console.log(numsMap);
    }
};

console.log(twoSum([2,7,11,15], 9));