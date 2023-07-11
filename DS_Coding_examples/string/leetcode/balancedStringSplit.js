var balancedStringSplit = function(s) {
    let count=0;
    let rCount=0;
   
    for(let i=0;i<s.length;i++){
        const c = s[i];
        if(c==='R')rCount++;
        if(c==='L') rCount--;
        if(rCount===0)count++;
    }

    return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));
