var plusOne = function(digits) {
    let i = digits.length-1;
    while(i>=0){
        let n= digits[i];
        let n1 = n +1;
        if(n1=== 10){
          digits[i]=0;
          if(i===0){
            digits.unshift(1);
            return digits
          }else{
              i--;
          }
        }else{
            digits[i]=n1;
            return digits;
        }
    }

    return digits;
};

console.log(plusOne([1,9,1]));