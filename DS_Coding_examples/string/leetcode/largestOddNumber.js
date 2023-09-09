/**
 * @param {string} num
 * @return {string}

var largestOddNumber = function(num) {
    let maxOddNum = -1;
    let maxOddNumLength = 0;
    const numstr = num.toString();
    const l = numstr.length;
    
    for(let i=0;i<l;i++){
        for(let j=l;j>=0;j--){
            console.log(i,j);
            const str = numstr.substring(i, j);
            const strNumLast = parseInt(str[str.length-1]);
            const strNum = BigInt(str);
            if( strNumLast >0 && strNumLast %2 !== 0 && strNum>maxOddNum){
                console.log(str);
                maxOddNum = strNum;
                maxOddNumLength = str.length;
                break;
            }
        }

        if(maxOddNumLength >= (l-i)){
            break;
        }
    }

    if(maxOddNum!==-1) return maxOddNum.toString();

    return "";

};
 */

var largestOddNumber = function(num) {
    const l = num.length;

    for(let j=l-1;j>=0;j--){
        const strNumLast = parseInt(num[j]);
        if( strNumLast >0 && strNumLast %2 !== 0){
          return num.substring(0, j+1);
        }
    }

    return "";

}


console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
console.log(largestOddNumber("239537672423884969653287101"));
