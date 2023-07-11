var decompressRLElist = function(nums) {
    
    let ans = [];

    for(let i=0;i<nums.length/2;i++) {
        let f = nums[2*i];
        let v = nums[2*i+1];
        for(let x=0;x<f;x++) {
            ans.push(v);
        }
    }

    return ans;
};

console.log('erf',decompressRLElist([1,2,3,4]));