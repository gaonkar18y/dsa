/*function getUniqueCharCount(str){
    let charMap={};

    for(let i=0;i<str.length;i++){
        const c = str[i];
        if(charMap[c]){
            const cArr = charMap[c];
            if(c === str[i-1]){
                cArr[cArr.length-1]++;
            }else[
                cArr.push(1)
            ]
            charMap[c] = cArr;
        }else{
            charMap[c]=[1];
        }
       
    }

    return charMap;
}


var isIsomorphic = function(s, t) {
    const charMap1 = getUniqueCharCount(s);
    const charMap2 = getUniqueCharCount(t);
    
    if(Object.keys(charMap1).length !== Object.keys(charMap2).length){
        return false;
    }

    const charMap1Vals = Object.values(charMap1)
    const charMap2Vals = Object.values(charMap2);

    for(let i=0;i<charMap1Vals.length;i++){
        const charMap1Val = charMap1Vals[i].join();
        const charMap2Val = charMap2Vals[i].join();
        if(charMap1Val!==charMap2Val){
            return false;
        }
    }

    return true;
};*/

var isIsomorphic = function(s, t) {

    let obj = {};

    for(let i=0;i<s.length;i++){
        const charS = s[i];
        const charT = t[i];
 
        if(!obj['s'+charS]){
            obj['s'+charS] = charT;
        }

        if(!obj['t'+charT]){
            obj['t'+charT] = charS;
        }
     
        if(charT !== obj['s'+charS] || charS !== obj['t'+charT]){
            return false;
        }
    }
    return true;
}


console.log(isIsomorphic("bbbaaaba","aaabbbba"));
