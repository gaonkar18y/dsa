var wordPattern = function(pattern, s) {
    const strArr = s.split(' ');

    if(strArr.length !== pattern.length){
        return false;
    }

    const map = {};

    for(let i=0;i<pattern.length;i++){
        let patternChar = pattern[i];
        let word = strArr[i];

        if(!map['p'+patternChar]){
            map['p'+patternChar] = word;
        }

        if(!map['w'+word]){
            map['w'+word] = patternChar;
        }

        if(word !== map['p'+patternChar] || patternChar !== map['w'+word]){
            return false;
        }
    }

    return true;
};

console.log(wordPattern("abc","b c a"))

//console.log(wordPattern("abba","dog dog dog dog"))
/*console.log(wordPattern("abba","dog cat cat dog"))
console.log(wordPattern("abba","dog cat cat fish"))
console.log(wordPattern("aaaa","dog cat cat dog"))*/


