/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    const n = nums.length;
    let seqCount = 1;
    const sortedNums = nums.sort((a,b)=> a-b);
    let min = sortedNums[0];
    for(let i=1;i<n;i++){
        if(sortedNums[i]-min>k){
            min=sortedNums[i];
            seqCount++;
        }
    }
    return seqCount;
};


console.log(partitionArray([3,6,1,2,5],2));
console.log(partitionArray([1,2,3],1));
console.log(partitionArray([0,1,2,3],1));
console.log(partitionArray([0,2],1));
console.log(partitionArray([5,16,3,20,9,20,16,19,6],4));
