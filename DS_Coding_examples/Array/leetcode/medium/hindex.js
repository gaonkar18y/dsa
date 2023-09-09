var hIndex = function(citations) {
    let sorted = citations.sort((a,b)=> a-b);
    const N = sorted.length;
    let count = 0;
    let j = N-1;
    for(let i=N;i>0;i--){
        while(sorted[j]>=i && count <i){
            count++;
            if(count=== i){
                break;
            }
            j--;
        }
        if(count === i) return i;
    }

    return 0;
};

console.log(hIndex([3,0,6,1,5]));

console.log(hIndex([1,3,1]));

