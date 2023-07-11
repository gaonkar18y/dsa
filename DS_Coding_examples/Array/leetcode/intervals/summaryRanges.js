
function getRanegString(x, y) {
        if(x===y){
            return ""+x;
        }else{
            return x+"->"+y;
        }
}
var summaryRanges = function(nums) {
    if(nums.length===0){
        return [];
    }

    let ranges=[];
    let startIndex = 0;
    for(let i=1;i<nums.length;i++){
        if( (nums[i-1] +1 )!==nums[i]){
            ranges.push(getRanegString(nums[startIndex], nums[i-1]));
            startIndex=i;
        }
    }
    ranges.push(getRanegString(nums[startIndex], nums[nums.length-1]));
    return ranges;
};

console.log(summaryRanges([0,2,3,4,6,8,9,11]));