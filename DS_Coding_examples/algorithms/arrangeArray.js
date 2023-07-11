function arrangeArray(arr){
    let max=0;
    for(let i=0;i< arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }

    let result = [];

    for(let i=0;i<=max;i++){
        if(arr.includes(i)){
            result.push(i)
        }else {
             result.push(-1);
        }
    }

    return result;
}

console.log(arrangeArray([-1,-1, 6, 1, 9, 3 , 2, -1, 4, -1]))