var countKDifference = function(nums, k) {
    
    let count = 0;

    for(let i=0;i<nums.length;i++) {

        let n = nums[i];
        let isDone = false;
        let x = i+1;
        let p = n+k;
      
        while(!isDone) {
           x = nums.indexOf(p, x);
         
           if ( x === -1 ) {
               isDone = true;
           } else {
               count++;
               x++;
           }
        }

        isDone = false;
        x = i+1;
        p = n-k;
        
        while(!isDone) {
           x = nums.indexOf(p, x);
           if ( x === -1 ) {
               isDone = true;
           } else {
               count++;
               x++;
           }
        }
    }

    return count;
};

console.log(countKDifference([1,2,2,1],1));
console.log(countKDifference([3,2,1,5,4],2));
console.log(countKDifference([1,3],3));