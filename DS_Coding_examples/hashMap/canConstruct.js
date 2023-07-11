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

var canConstruct = function(ransomNote, magazine) {
    const charMap1 = getCharCount(ransomNote);
    const charMap2 = getCharCount(magazine);

    for(const [k, v] of Object.entries(charMap1)){
        if(!charMap2[k] || charMap2[k] < v){
            return false;
        }
    }

    return true;
};