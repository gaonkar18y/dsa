var reverse = function(x) {
    let number = Math.abs(x);
    let reverse = 0;

    while(number>=1) {
        lastDigit = number%10;
        reverse = reverse*10 + lastDigit;
        number=parseInt(number/10);
    }
   
    if ( reverse < ( Math.pow(2,31)-1) && reverse > -Math.pow(2,31)){
        return Math.sign(x)*reverse;
    } else {
        return 0;
    }
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(Math.pow(2, 30) - 2));
