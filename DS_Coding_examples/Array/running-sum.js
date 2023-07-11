var runningSum = function(nums) {
    if( !nums || nums.length<=0 ) {
        return nums;
    }
    let rsum = [nums[0]];

    for(let i=1;i<nums.length;i++) {
        rsum.push(nums[i]+rsum[i-1]);
    }

    return rsum;
};

console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([1,2,3,4]));
console.log(runningSum([3,1,2,10,1]));