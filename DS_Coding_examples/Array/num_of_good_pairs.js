var numIdenticalPairs = function(nums) {
    let map = new Map();

    for(let i=0;i<nums.length;i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            if(map.has(nums[i])) {
                let indexes = map.get(nums[i]);
                indexes.push(i);
                map.set(nums[i], indexes);
            } else {
                map.set(nums[i], [i])
            }
        }
    }

    let total = 0;
    for(let mapsV of map.values()) {
        let n = mapsV.length-1;
        total+= (n*(n+1))/2;
    }
    return total;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));