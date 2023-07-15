function selectionSort(arr) {
    
    for(let i=0;i<arr.length;i++){

        let minIndex = i;
        let minValue = arr[i];
        for(let j=i+1;j<arr.length;j++){

            if(arr[j]<minValue){
                minValue = arr[j];
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
        }

    }

    return arr;
}

console.log(selectionSort([4,2,8,6,9]));