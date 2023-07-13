function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0){
        return [];
    }

    let str = arr[0];
    str= str[0].toUpperCase() + str.substr(1);

    if(arr.length === 1){
        return [str];
    }

    return [str].concat(capitalizeFirst(arr.slice(1)))
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']