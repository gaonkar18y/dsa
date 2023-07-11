var rotate = function(nums, k) {
    let steps = k;
    if(k>nums.length){
        steps = k%nums.length;
    }
    nums.splice(0, 0, ...nums.splice(nums.length-steps,steps))
};

//let arr = [1,2,3,4,5,6,7];
let arr = [1,2];
let k = 5;
rotate(arr,k);
console.log(arr);

