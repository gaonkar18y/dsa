function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.

    let nums1str = ""+num1;
    let nums2str = ""+num2;

    if(nums1str.length!==nums2str.length){
        return false;
    }

    let digitsCount={};

    for(let i=0;i<nums1str.length;i++){
        if(digitsCount[nums1str[i]]){
            digitsCount[nums1str[i]]++;
        }else{
            digitsCount[nums1str[i]]=1;
        }
    }

    for(let i=0;i<nums2str.length;i++){
        if(digitsCount[nums2str[i]]){
            digitsCount[nums2str[i]]--;
        }else{
            return false
        }
    }

    return true;
    
  }
  

console.log(sameFrequency(222,222))
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false