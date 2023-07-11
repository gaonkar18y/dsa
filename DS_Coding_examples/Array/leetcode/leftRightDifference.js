var leftRightDifference = function(nums) {
    const result=[];
    let rightSum = nums.reduce((ac, v)=> ac+v,0);
    let leftSum=0;
    for(let i=0;i<nums.length;i++){
        rightSum=rightSum-nums[i];
        result.push(Math.abs(leftSum-rightSum));
        leftSum+=nums[i];
    }

    return result;
};

console.log(leftRightDifference([10,4,8,3]));
