var smallerNumbersThanCurrent = function(nums) {
  
    let map = new Map();
    let dupMap = new Map();

    for(let i=0;i<nums.length;i++) {
        let alreadyPresent = false;
        let selfInc = 0;
        if (map.has(nums[i])) {
            alreadyPresent = true;
            if ( dupMap.has(nums[i])) {
                let c = dupMap.get(nums[i]);
                c++;
                dupMap.set(nums[i], c);
            } else {
                dupMap.set(nums[i], 2);
            }
        }

        for ( let k of map.keys()) {
           
            if ( k > nums[i]) {
                let c = map.get(k);
                c++;
                map.set(k,c);
              
            } else if ( !alreadyPresent ) {
    
                if ( k < nums[i] ) {
                    if (dupMap.has(k)) {
                        selfInc+=dupMap.get(k);
                    }else {
                        selfInc++;
                    }
                }   
            }
        }
        if ( !alreadyPresent) {
            map.set(nums[i], selfInc);
        }
    }
    for(let y=0;y<nums.length;y++) {
        nums[y] = map.get(nums[y]);
    }
    return nums;
};

console.log(smallerNumbersThanCurrent([6,3,7,6,9]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));
console.log(smallerNumbersThanCurrent([5,0,10,0,10,6]));
