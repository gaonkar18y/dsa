function getCharCount(str){
    const charMap = {};
    for(let i =0;i<str.length;i++){
        const c = str[i];
        if(charMap[c]){
            charMap[c]++;
        }else{
            charMap[c]=1;
        }
    }

    return charMap;
}

var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }

    const charMapS = getCharCount(s);

    for(let i=0;i<t.length;i++){
        const charT = t[i];
        if(!charMapS[charT]){
            return false
        }
        charMapS[charT]--;
    }

    return true;
};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));