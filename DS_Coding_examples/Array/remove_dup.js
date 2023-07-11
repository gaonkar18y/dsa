/**
 * @param {number[]} nums
 * @return {number}

 var removeDuplicates = function(nums) {
    
    let isDone = false;
    let i=0;
    
    while(!isDone){

        if (nums[i] === '_' ||  ( i === nums.length) ){
            isDone = true;
        } else {
            if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
                i++;
            }else {
                let y = nums.lastIndexOf(nums[i]);
                let firstWildChar = nums.indexOf('_');
                if ( firstWildChar === -1) {
                    firstWildChar =  nums.length-1;
                }
                let a=y;
                for (;a<firstWildChar;a++) {
                    nums[a] = nums[a+1];
                }
                nums[a] = '_';
            }
        }
    }
   let uniqueCount = nums.indexOf('_');
    if ( uniqueCount === -1) {
        uniqueCount =  nums.length;
    }
    return uniqueCount;
};
 

var removeDuplicates = function(nums) {
    
    let isDone = false;
    let i=0;
    
    while(!isDone && nums.length>0){
        let currentElment = nums[i];

        if (nums.indexOf(currentElment) === nums.lastIndexOf(currentElment)){
            i++;
            if ( i>= (nums.length -1) ) {
                isDone = true;
            }
        }else {
            let j = -1;
            let k = i;
            let isSeachOver = false;
            while( !isSeachOver ) {
                k++;
                if ( k >= nums.length) {
                    isSeachOver = true
                }else if ( nums[k] !== currentElment ) {
                    isSeachOver = true;
                    j = k;
                }
            }
            if (j === -1) {
                isDone = true;
            } else {
                let replacer  = nums[j];
                for (let x=i+1;x<nums.length;x++) {
                    if ( nums[x] === currentElment ) {
                        nums[x] = replacer;
                    }
                }
                i++;
            }
        }
    }
   
    return i+1;
};

*/


var removeDuplicates = function(nums) {
    
    let isDone = false;
    let i=0;
    
    while(!isDone && nums.length>0){
        let currentElment = nums[i];

        if (nums.indexOf(currentElment) === nums.lastIndexOf(currentElment)){
            i++;
            if ( i>= (nums.length -1) ) {
                isDone = true;
            }
        }else {
            let j = nums.lastIndexOf(currentElment);
           
            if (j === (nums.length-1)) {
                isDone = true;
            } else {
                let replacer  = nums[j+1];
                for (let x=i+1;x<=j;x++) {
                    if ( nums[x] === currentElment ) {
                        nums[x] = replacer;
                    }
                }
                i++;
            }
        }
    }
   
    return i+1;
};


console.log(removeDuplicates([]));
console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([-2,-2,-2,-4,-4,-1,-10,0,1,1,1,2,2,3,3,4]));