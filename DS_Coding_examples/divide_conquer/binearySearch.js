function search(arr, num) {
    
    let low = 0;
    let high = arr.length -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === num){
            return mid;
        }

        if(num > arr[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }

    return -1;
}


console.log(search([1,2,3,4,5,6,7,8,9],7));