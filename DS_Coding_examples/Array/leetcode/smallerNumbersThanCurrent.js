var smallerNumbersThanCurrent = function(nums) {
    const result=[];
    let i=0;
    for(;i<nums.length;i++){
        let c = 0;
        let currNum = nums[i];
        const startIndex = nums.indexOf(currNum);
        if(startIndex < i){
            result.push(result[startIndex]);
            continue;
        }

        for(let j=0;j<nums.length;j++){
            if(nums[j]<currNum){
                c++;
            }
        }
        result.push(c);
    }
    return result;
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

