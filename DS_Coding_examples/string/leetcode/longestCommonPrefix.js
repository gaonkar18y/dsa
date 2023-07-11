var longestCommonPrefix = function(strs) {
    let result="";

    for(let i=0;i<strs[0].length;i++){
        const c = strs[0][i];
        let flag=true;
        for(let j=1;j<strs.length;j++){
            if(strs[j][i] !== c){
                flag=false;
            }
        }
        if(flag){
            result+=c;
        }else{ break;}
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]))