/**
 * 
 * @param {*} nums 
 * @returns 
 * 
 * var singleNumber = function(nums) {
    let numsReead = new Set();
   for(let i=0;i<nums.length;i++){
       if( !numsReead.has(nums[i]) && nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
           return nums[i];
       }else{
           numsReead.add(nums[i]);
       }
   }
};
 */

/*
var singleNumber = function(nums) {
    let numsReead = new Set();
    let duplicateNums = new Set();
   for(let i=0;i<nums.length;i++){
        if(duplicateNums.has(nums[i])){
            continue;
        }

       if( !numsReead.has(nums[i]) ){
            numsReead.add(nums[i]);
       }else{
            duplicateNums.add(nums[i]);
            numsReead.delete(nums[i]);
       }
   }

   return Array.from(numsReead)[0];
};*/


var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        console.log(uniqNum, nums[idx]);
        uniqNum = uniqNum ^ nums[idx];
        console.log(uniqNum);
    } return uniqNum;       // Return the unique number...
};

console.log(singleNumber([4,1,2,1,2]));
