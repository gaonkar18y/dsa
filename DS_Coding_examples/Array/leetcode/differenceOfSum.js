var differenceOfSum = function(nums) {

    let totalSum = 0;
    let totalDigitSum = 0;

    for(let n of nums){
        totalSum+=n;
        const nstr = n.toString();
        if(nstr.length === 1){
            totalDigitSum+=n;
        } else {
            let digitSum = 0;
            for(let i=0;i<nstr.length;i++){
                digitSum+=+nstr.charAt(i);
            }
            totalDigitSum+=digitSum;
        }
    }

  
    return Math.abs(totalSum-totalDigitSum);
};

console.log(differenceOfSum([1,15,6,3]));