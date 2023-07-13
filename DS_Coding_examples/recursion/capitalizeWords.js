function capitalizedWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0){
        return [];
    }

    str= arr[0].toUpperCase();

    if(arr.length === 1){
        return [str];
    }

    return [str].concat(capitalizedWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']