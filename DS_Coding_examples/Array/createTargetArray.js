var createTargetArray = function(nums, index) {
    let result = [];
    for(let i=0;i<nums.length;i++) {
        let x = index[i];
        let v = nums[i];
        result.splice(x,0,v);
    }
    return result;
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]));
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]));
