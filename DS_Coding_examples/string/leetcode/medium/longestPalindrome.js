const isPalindrome = (s)=>{
    for(let i=0;i<parseInt(s.length/2);i++){
        if(s[i] !== s[s.length-i-1]){
            return false
        }
    }

    return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let result = '';
    if(!s){
        return s;
    }
    const n = s.length;

    if(n==1){
        return s;
    }

    if(n==2) {
        if(s[0] == s[1]){
            return s;
        }
        return s[0];
    }

    const map = new Map();
    for(let i=0;i<n;i++){
        const c = s[i];
        if(map.has(c)){
            map.set(c, map.get(c)+1)
        } else {
            map.set(c, 1);
        }
    }

    let start = 0;
    let end = s.length - 1;
    result=s[0];
    while((result.length < n - start) && start < end) {
        end = s.length - 1;
        const startChar = s[start];
        let charC =  map.get(startChar);
        while(charC>1) {
            let j=end;
            while(j>start && s[j] !== startChar) {
                j--;
            }
            if(start !== j) {
                const str = s.substring(start, j+1);
                if(isPalindrome(str)){
                    if(str.length > result.length) {
                        result = str;
                    }
                    break;
                } else {
                    end = j-1;
                    charC--;
                }
            } else {
                break;
            }
        }
        start++;
    }

    return result;
    
};
console.log(isPalindrome('aca'));
console.log(longestPalindrome('aacabdkacaa'));
console.log(longestPalindrome('abcda'));


