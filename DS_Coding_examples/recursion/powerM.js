const power = (n,m)=>{
    if (m <= 1) {
        return n;
    }
    return n*power(n,m-1);
}

console.log(power(2,3));