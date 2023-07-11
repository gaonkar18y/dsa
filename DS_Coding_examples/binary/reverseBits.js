var reverseBits = function(n) {
    const strbits = n.toString(2);
    const arr = strbits.split('');

    if(arr.length<32){
        const d = (32-arr.length);
        for(let i=0;i<d;i++){
            arr.unshift('0');
        }
    }
    const rev =arr.reverse().join('');
    return parseInt(rev, 2);
};

console.log(reverseBits(43261596));

