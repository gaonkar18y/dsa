var join = function(arr1, arr2) {
    let result = [];
    for(let i=0;i<arr1.length;i++){
        let item = arr1[i];
        result[item.id] = item;
    }

    for(let i=0;i<arr2.length;i++){
        let item = arr2[i];
        if(result[item.id]){
            if(Object.keys(item).length>1){
                result[item.id] = {...result[item.id], ...item}
            }
        }else{
            result[item.id] = item;
        }
    }

    return result.filter((item)=> !!item);
};

arr1 = [
    {"id": 2, "b": {"b": 94},"v": [4, 3], "y": 48}, {id: 1}
]
arr2 = [
    {"id": 2, "b": {"c": 84}, "v": [1, 3]}
]

console.log(join(arr1, arr2));