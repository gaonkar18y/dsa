/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numLetterMap = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }
    const digitsStr = digits.toString();
    let n = digitsStr.length;
    if(n === 0){
        return [];
    }
    let combinations = numLetterMap[digitsStr[0]]
    let position = 1;
    while(position<n){
        const newDigitLetters = numLetterMap[digitsStr[position]];
        const newComb = [];
        for(let i=0;i<combinations.length;i++){
            const a = combinations[i];
            for(let j=0;j<newDigitLetters.length;j++){
                newComb.push(a+newDigitLetters[j]);
            }
        }
        combinations = newComb;
        position++;
    }
    return combinations;
};

console.log(letterCombinations(2));
console.log(letterCombinations(23));
console.log(letterCombinations(2359));