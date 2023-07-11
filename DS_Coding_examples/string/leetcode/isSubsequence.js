var isSubsequence = function(s, t) {
    let previousMatch=0;

    for(let i=0;i<s.length;i++){
        let c = s[i];
        let flag=false;
        for(let j=previousMatch;j<t.length;j++){
            if(c===t[j]){
                previousMatch=j+1;
                flag=true;
                break;
            }
        }

        if(!flag) return false;
    }

    return true;
    
};

console.log(isSubsequence("abc","ahbgdc"));
console.log(isSubsequence("axc","ahbgdc"));
console.log(isSubsequence("aaaaaa","bbaaaa"));
