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


var groupAnagrams = function(strs) {
    
    const result = [];
    const found = {};
    let foundCount=0;

    for(let i=0;i<strs.length;i++){
        if(found[i]){
            continue;
        }
        const str = strs[i];
        found[i]=1;
        foundCount++;
        const group = [str];
        for(let j=i+1;j<strs.length; j++){
            if(!found[j] && isAnagram(str, strs[j])){
                if(j === i+1) i++;
                found[j]=1;
                foundCount++;
                group.push(strs[j]);
            }
        }
        result.push(group);

        if(foundCount === strs.length){
            break;
        }
    }

    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));