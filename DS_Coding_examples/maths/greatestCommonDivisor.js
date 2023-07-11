function greatestCommonDivisor(a,b){
    if(a < 2 || b < 2){
        return 1;
    }

    let n = a > b ? b : a;
    n--;
    while(n>0){
        if(a%n == 0 && b%n==0){
            return n
        }
        n--;
    }

    return 1;
}

console.log(greatestCommonDivisor(69, 169));
