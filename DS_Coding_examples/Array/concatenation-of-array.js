var getConcatenation = function(nums) {
    return [...nums, ...nums];
};

var getConcatenation2 = function(nums) {
    let ans = Array.from(nums);
    for( let i=0;i<nums.length;i++) {
        ans.push(nums[i]);
    }
    return ans;
};

console.log(getConcatenation([1,2,3,4]));
console.log(getConcatenation2([1,2,3,4]));