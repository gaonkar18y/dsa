/**
 * 
 * var lengthOfLastWord = function(s) {
    let str = s.trim();
    let count=0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i]!==' '){
            count++;
        }else{
           break;
        }
    }

    return count;
};
 */

var lengthOfLastWord = function(s) {
    let count=0;
    for(let i=s.length-1;i>=0;i--){
        if(count===0 && s[i]===' ') continue;
        if(s[i]!==' '){
            count++;
        }else{
            break;
        }
    }

    return count;
};