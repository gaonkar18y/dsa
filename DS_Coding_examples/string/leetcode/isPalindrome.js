var isPalindrome = function(s) {
    const lStr = s.toLowerCase();
    let validStr = "";
    console.log(lStr)
    for(let i=0;i<lStr.length;i++){
        const charCode = lStr.charCodeAt(i);
        if( (charCode>96 && charCode < 123) || (charCode>=48 && charCode <=57)){
            validStr+=lStr[i];
        }
    }
    console.log(validStr)
    for(let i=0;i<validStr.length/2;i++){
        const cstart = validStr[i];
        const cend = validStr[validStr.length-1-i];
        if(cstart !== cend){
            return false;
        }
    }

    return true;

};

/*
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
*/
console.log(isPalindrome("`l;`` 1o1 ??;l`"));
