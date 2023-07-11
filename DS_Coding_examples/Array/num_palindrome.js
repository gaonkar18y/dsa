/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

    if ( Math.sign(x) == -1 ) {
        return false;
    }else {
        let reverse = 0;
        let num = Math.abs(x);

        while(num>=1){
            let l = num%10;
            reverse = reverse*10 + l;
            num=parseInt(num/10);
        }
        return x === reverse;
    }
    
};

console.log(isPalindrome(121));