/*var reverseString = function(s) {

    const reverse = (arr, index) => {
        if ( index === 0) 
            return [arr[index]];

       return [arr[index],...reverse(arr, index-1)]
             
    }

    return reverse(s, s.length-1);
};*/

var reverseString = function(s) {

    const reverse = (arr, index) => {
        if ( index >= arr.length/2) 
            return;
       let t = arr[index];
       arr[index] = arr[arr.length-index-1];
       arr[arr.length-index-1] = t;
       reverse(arr, index+1);
    }

    reverse(s, 0);
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));