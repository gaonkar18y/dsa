/*var jump = function(nums) {

    let minLevel = Infinity;

    let cache = {};

    const countJump = (index, level)=>{
        console.log(index, level);
        if(nums[index] === 0){
            return
        }
        if(cache[index] && level >= cache[index]){
            return;
        }

        if(index >= nums.length-1){
            minLevel = Math.min(minLevel, level);
            return;
        }
        const v = nums[index];
   
        for(let i=1;i<=v;i++){
           countJump(index+i, level+1);
        }

        cache[index] = minLevel;
    }

    countJump(0, 0);
    return minLevel;
};*/

var jump = function(nums) {
    let step = 0;
    let range = [0,0];
    while(range[1]<nums.length-1){
        let max = range[1];
        for(let i=range[0];i<=range[1];i++){
            max=Math.max(max, i+nums[i]);
        }
        range[0]=range[1]+1;
        range[1] = max;
        step++;
    }
    return step;
}

console.log(jump([2,3,1,1,4]))

console.log(jump([2,3,0,1,4]))

console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]));

//console.log(jump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]))