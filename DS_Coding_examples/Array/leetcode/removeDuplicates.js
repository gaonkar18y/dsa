var removeDuplicates = function(nums) {

    if(nums.length<=2){
        return nums.length;
    }

    let i=2;

    while(i<nums.length && nums[i] !== '_'){

        if(nums[i]===nums[i-1] && nums[i] === nums[i-2]){
            let j=i+1;
            let c=1;
            while(nums[j] === nums[i]){
                j++;
                c++;
            }
            nums.splice(i, c);
            nums.push(...(new Array(c).fill('_')));
        }else{
            i++;
        }
    }
   
    let  k = nums.indexOf('_');
    if(k!==-1){
        return k;
    }

    return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
console.log(removeDuplicates([1,2,2,2]));
