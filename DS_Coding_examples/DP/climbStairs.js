/*var climbStairs = function(n) {
    if(n<0){
        return 0;
    }
    if(n===1 || n === 0){
        return 1;
    }
    return climbStairs(n-1)+climbStairs(n-2);
};*/

var climbStairs = function(n) {
    const result = [1, 2];
    let i=2
    for(;i<n;i++){
        result.push(result[i-1]+result[i-2]);
    }
    return result[result.length-1];
}



console.log(climbStairs(4));