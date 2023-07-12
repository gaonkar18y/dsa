function isPalindrome(str){
    if(str.length<=1){
        return true;
    }

    if(str.length===2){
        return str[0] === str[1];
    }

    return str[0] === str[str.length-1] && isPalindrome(str.substr(1, str.length-2));

}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
