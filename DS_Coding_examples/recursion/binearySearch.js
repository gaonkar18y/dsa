
const binearSearch = (arr, number, low, high) => {
   

    if ( low > high ) {
        return -1;
    }

    const mid = low + parseInt((high-low)/2);

    if ( arr[mid] === number)  {
        return mid;
    }

    if ( number < arr[mid] )  {
        return binearSearch(arr, number, low, mid-1);
    }


    if ( number > arr[mid]  )  {
        return binearSearch(arr, number, mid+1, high);
    }


}   

const bSearch = (arr, number) => {
    return binearSearch(arr, number, 0, arr.length-1);
}

console.log(bSearch([1,2,3,4,5], 3));
console.log(bSearch([1,2,3,4,5], 10));

console.log(bSearch([1,2,3,4,5,6,7,8,9,10,11,12], 10));