var threeSum = function (nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let low = i + 1;
        let high = nums.length - 1;
        let sum = 0;
        while (low < high) {
            sum = nums[i] + nums[low] + nums[high]
            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                while (nums[low] === nums[low + 1]) {
                    low++;
                }
                while (nums[high] === nums[high -1]) {
                    high--;
                }
                low++;
                high--;
            } else if (sum < 0) {
                low++;
            } else {
                high--;
            }
        }
        while (nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));