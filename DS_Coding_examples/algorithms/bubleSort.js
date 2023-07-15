

function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        let isSwap = false;
        for(let j=0;j<arr.length-i-1;j++){

            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwap = true;
            }
        }

        if(isSwap === false) break;
    }

    return arr;
}

console.log(bubbleSort([4,2,8,6,9]));