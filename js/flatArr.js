var flat = function (arr, n) {
    let depth = 0;
    let result = arr;

    while(depth<n){
        let l = result.length;
        let i=0;
        while(i<result.length){
            let item = result[i];
            if(typeof item !== 'number' && item.length!==undefined){
                result.splice(i,1,...item);
                i+=item.length;
            }else{
                i++;
            }
        }
        if(l === i){
            return result;
        }
        depth++;
    }
    
    return result;
};

console.log(flat([1,2,[3,5]],0));
console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],1));
console.log(flat([1,2,[3,5,[6,7]]],1));
console.log(flat([1,2,[3,5,[6,7]]],2));
console.log(flat([1,2,[3,5,[6,7]]],5));