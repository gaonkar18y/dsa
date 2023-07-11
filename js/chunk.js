var chunk = function(arr, size) {
    const result = [];
    let i = 0;

    while(i<arr.length){
        result.push(arr.slice(i, i+size));
        i+=size;
    }

    return result;
};

console.log(chunk([1,2,3],1));