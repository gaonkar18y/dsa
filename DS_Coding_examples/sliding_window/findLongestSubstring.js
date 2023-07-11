function findLongestSubstring(str){
    const N = str.length;

    if(N<=1){
        return N;
    }

    let i=0;

    while(str[i] === str[i+1]) i++;

    let j=i+1;
    let tmpStr = str[i];
    let max = 1;

    while(j<str.length){
        while(j<N && !tmpStr.includes(str[j])){
            tmpStr+=str[j];
            j++;
        }
        max=Math.max(max, tmpStr.length);
        i=0;
        while(tmpStr[i]!==str[j])i++;
        i++;
        tmpStr=tmpStr.substring(i);
    }

    return max;
}
  
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
