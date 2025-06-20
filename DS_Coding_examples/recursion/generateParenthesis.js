/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const traverse = (ans, openCount, closeCount)=>{

        if(openCount+closeCount === n*2) {
            result.push(ans);
            return;
        }

        if(openCount<n){
            traverse(ans+'(', openCount+1, closeCount);
        }
       
        if(closeCount<openCount){
            traverse(ans+')', openCount, closeCount+1);
        }
    }

    traverse("", 0, 0);

    return result;
    
};

console.log(generateParenthesis(1));

console.log(generateParenthesis(2));

console.log(generateParenthesis(3));

console.log(generateParenthesis(4));