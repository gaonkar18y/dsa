
const addTo = (n) => {
    if (n==0){
        return 0;
    }
    return n+addTo(n-1)
}

const sum = (n)=> {
    return addTo(n);
}

console.log(sum(10));