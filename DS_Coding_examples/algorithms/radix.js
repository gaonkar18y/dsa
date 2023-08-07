function getDigit(num, i) {
    let r = 0;
    let n = num;
    for(let j=0;j<=i;j++){
          r=n%10;
          n=parseInt(n/10);
    }
    return r;
}

function digitCount(num) {
   return (num+"").length;
}

function mostDigits(nums) {
   let max = 0;
   for(let i=0;i<nums.length;i++){
    max = Math.max(max, digitCount(nums[i]));
   }
   return max;
}

function radixSort(nums) {
   const l = mostDigits(nums);
   let arr = [...nums];
   let radix = [[],[],[],[],[],[],[],[],[],[]];
   for(let i=0;i<l;i++){
      for(let j=0;j<arr.length;j++){
        const d = getDigit(arr[j],i);
        console.log('d',d);
        radix[d].push(arr[j]);
      }

      arr = radix.reduce((acc,v)=>acc.concat(v),[]);
      radix = [[],[],[],[],[],[],[],[],[],[]];
   }
   return arr;
}

/*console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]*/

console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); 
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
/*
console.log(digitCount(1)); // 1
console.log(digitCount(9)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
digitCount(1234); // 4
digitCount(77777); // 5


console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0
 
getDigit(8987, 0); // 7
getDigit(8987, 1); // 8
getDigit(8987, 2); // 9
getDigit(8987, 3); // 8
getDigit(8987, 4); // 0
*/
