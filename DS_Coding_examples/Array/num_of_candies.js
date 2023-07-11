/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    
    let max = 0;
    let i=0;
    for(;i<candies.length/2;i++) {
        if ( candies[i] > max) {
            max = candies[i];
        }
        if ( candies[candies.length - i -1 ] > max) {
            max = candies[candies.length - i -1];
        }
    }
    if (candies.length%2 !== 0) {
        if ( candies[i] > max) {
            max = candies[i];
        }
    }

    return candies.map( c=> (c+extraCandies)>=max);
};

console.log(kidsWithCandies([2,3,5,1,3],3));

console.log(kidsWithCandies([4,2,1,1,2],1));