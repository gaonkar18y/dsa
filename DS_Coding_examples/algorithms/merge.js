function merge(arr1, arr2, compreFn = (a, b) => a - b) {
    const result = [];
    if (arr1.length === 0 && arr2.length === 0) return result;
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    let arr1Index = 0;
    let arr2Index = 0;
    while (arr1Index < arr1.length) {
        let v = arr1[arr1Index];
        while (arr2Index < arr2.length && compreFn(arr2[arr2Index], v)<0) {
            result.push(arr2[arr2Index]);
            arr2Index++;
        }
        result.push(v);
        arr1Index++;
    }

    while (arr2Index < arr2.length) {
        result.push(arr2[arr2Index]);
        arr2Index++;
    }


    return result;
}

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
console.log(merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]

var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];
 
console.log(merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
 
var arr5 = [3,4,5]
var arr6 = [1,2]
 
console.log(merge(arr5,arr6)) // [1,2,3,4,5]
 
var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
 
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
 
console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]