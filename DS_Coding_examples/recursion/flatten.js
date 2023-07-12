function flatten(arr){
    const result = [];

    const flat = (a)=>{

        for(let item of a){
            if(typeof item === 'number'){
                result.push(item);
            }else{
                flat(item);
            }
        }
    }

    flat(arr)

    return result;
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3