/*var numIdenticalPairs = function(nums) {
    let map = {}
    let total = 0;

    for(let i=0;i<nums.length;i++) {
        let n = nums[i];
        if(map[n]){
            total+=map[n];
            map[n]++;
        }else{
            map[n] = 1;
        }
    }

    return total;
};*/


var numIdenticalPairs = function(nums) {
    let total = 0;

    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] === nums[j]){
                total++;
            }
        }
    }

    return total;
};



console.log(numIdenticalPairs([1,2,3,1,1,3]));