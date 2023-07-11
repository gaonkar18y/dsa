var decode = function (encoded, first) {

    let arr = [first];

    encoded.forEach((n, i) => {
        arr.push(n ^ arr[i]);
    });

    return arr;
};

console.log(decode([1,2,3],1));

console.log(decode([6,2,7,3],4));

