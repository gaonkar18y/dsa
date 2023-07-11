/*var searchInsert = function(nums, target) {
    
    for(let i=0;i<nums.length/2;i++){
        if(target<=nums[i]){
            return i;
        }

        if(target===nums[nums.length-1-i]){
            return nums.length-1-i;
        }

        if(target>nums[nums.length-1-i]){
            return nums.length-1-i+1;
        }
    }
    
};*/


var searchInsert = function(nums, target) {
    
    const search=(nums,target, low, high)=>{
        if(low>=high){
            return low;
        }

        const middle = low+Math.floor((high-low)/2);

        if(target===nums[middle]){
            return middle;
        }

        if(target<nums[middle]){
            return search(nums, target, low, middle);
        }else{
            return search(nums, target, middle+1, high);
        }

    }

    return search(nums, target, 0, nums.length);    
}


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))