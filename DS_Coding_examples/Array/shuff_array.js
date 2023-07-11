var shuffle = function(nums, n) {
    let suffled = [];
    for(let i=0;i<n;i++) {
        suffled.push(nums[i], nums[i+n]);
    }
    return suffled;
};

console.log(shuffle([2,5,1,3,4,7],3));
console.log(shuffle([1,2,3,4,4,3,2,1],4));
