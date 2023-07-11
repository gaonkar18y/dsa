/*function lengthOfLongestSubstring(str){
    let maxLength=0;
    let tmpSet = new Set();
    for(let i=0;i<(str.length-maxLength);i++){
        tmpSet.add(str[i]);
        let j=i+1;
        while(j< str.length && !tmpSet.has(str[j])){
            tmpSet.add(str[j]);
            j++;
        }
        maxLength=Math.max(maxLength, tmpSet.size)
        tmpSet.clear();
    }

    return maxLength;
}*/

function lengthOfLongestSubstring(str){
    let maxLength=0;
    let tmpSet = new Set();
    for(let i=0;i<(str.length);i++){
        tmpSet.add(str[i]);
        maxLength=Math.max(maxLength, tmpSet.size);
        let j=i+1;
        while(tmpSet.has(str[j])){
            tmpSet.delete(str[j]);
            j++;
        }
        
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"))