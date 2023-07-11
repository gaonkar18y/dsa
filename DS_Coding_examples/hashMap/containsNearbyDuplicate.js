var containsNearbyDuplicate = function(nums, k) {
    let map={};
    let i=0;

    while(i<nums.length){
        let n = nums[i];
        if(map[n]){
            let previousIndexex = map[n];
            for(let j=0;j<previousIndexex.length;j++){
                if(Math.abs(i-previousIndexex[j])<= k){
                    return true;
                }
            }
            map[n].push(i);
        }else{
            map[n] = [i];
        }
        i++;
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));
console.log(containsNearbyDuplicate([1,0,1,1],1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));