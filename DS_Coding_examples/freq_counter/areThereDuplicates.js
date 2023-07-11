function areThereDuplicates(...args) {
    let map={};

    for(let a of args){
        if(map[a]) return true;
        map[a] = true;
    }
    return false;
  }

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
console.log(areThereDuplicates(1,2,3));