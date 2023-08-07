function pivot(arr, comparator=(a,b)=>a-b, start=0, end=arr.length - 1){
    let swapIndex = start;
    let pivotValue = arr[start];
    
    for(let i=start+1;i<=end;i++){
        if(comparator(arr[i],pivotValue)<0){
            swapIndex++;
           [arr[i], arr[swapIndex]] = [arr[swapIndex],arr[i]]
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex],arr[start]]
    return swapIndex;
}


function quickSort(arr, comparator) {
    const helper = (arr, comparator, start, end) =>{
        if(start >= end ){
            return
        }
        const p = pivot(arr,comparator, start, end);
        helper(arr, comparator, start, p-1);
        helper(arr, comparator, p+1, end);
    }
    helper(arr, comparator, 0, arr.length-1)
    return arr;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strLength(a, b) {
  return a.length - b.length
}
 
/*console.log(pivot(arr1)); // 3
console.log(arr1); // 3
console.log(pivot(arr2)); // 4
console.log(pivot(arr3, strLength)); // 1
 
console.log(arr1.slice(0, 3).sort((a, b) => a - b)); // [2, 3, 4]
console.log(arr1.slice(3).sort((a, b) => a - b)); // [5, 7, 8, 9, 10, 20]
 
console.log(arr2.slice(0, 4).sort((a, b) => a - b)); // [0, 2, 4, 5]
console.log(arr2.slice(4).sort((a, b) => a - b)); // [8, 10, 11, 12, 13, 16]
 
console.log(arr3.slice(0, 1).sort(strLength)); // ["Blue"]
console.log(arr3.slice(1).sort(strLength)); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]*/


console.log(quickSort([4,2,8,6,9]));

console.log(quickSort([4,2,8,6,9]));

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order