var minSubArrayLen = function(target, nums) {

    if(nums.includes(target)){
        return 1;
    }

    let minLength=0;
    let sum=0;
    let curLength=0;
    for(let i=0;i<nums.length;){
        let j=i;
        //console.log('1',sum, i, curLength)
        if(sum>0){
            sum=sum-nums[i-1];
            j=i+curLength;
        }
       // console.log('1',sum, i, j, curLength)
        while(sum<target && j<nums.length){
            sum+=nums[j];
            curLength++;
            j++;
        }
       
        if(sum===target){
            //console.log(sum, curLength);
            if(minLength===0){
                minLength = curLength;
            } else if(curLength) minLength=Math.min(minLength, curLength);
           
            sum=0;
            i=j-1;
            curLength=0;
            //console.log('2',sum, i, j, curLength)
            continue;
        } else{
            j=j-1;
            curLength=curLength-2;
            sum=sum-nums[j];
        }

        if(minLength===1){
            break;
        }
        i++;
    }


    return minLength;
};


//console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
//console.log(minSubArrayLen(4, [1,4,4]))

//console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(11, [1,2,3,4,5]))

