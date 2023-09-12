/*var longestConsecutive = function (nums) {
    let sorted = [];

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        sorted[n] = n;
    }

    let max = 0;
    let count = 0;
    let i = 0;
    while (i < sorted.length) {
        while (isNaN(sorted[i])) i++;
        while (!isNaN(sorted[i])) {
            i++;
            count++
        }
        max = Math.max(max, count);
        count = 0;
    }

    return max;
};*/

var longestConsecutive = function (nums) {
    let map = {};
    let countCache = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        map[n] = 1;
    }

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if(max>(nums.length-1)){
            break;
        }
        let n = nums[i];
        let count = 1;
        while(map[n-1] !== undefined){
            count++;
            n--;
            if(countCache[n]){
                count+=countCache[n]-1;
                break;
            }
        }
        if(count>1){
            countCache[nums[i]] = count;
        }
        max = Math.max(count, max);
    }
    return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
