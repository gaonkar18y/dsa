var mySqrt = function(x) {
    let low = 1;
    let high = x;

    while(low<=high){
        let m = Math.floor((low+high)/2);

        let t = m*m;

        if(t === x){
            return m;
        }

        if(t>x){
            high=m-1;
        }else{
            low=m+1;
        }
    }

    return high;
}

console.log(mySqrt(25));