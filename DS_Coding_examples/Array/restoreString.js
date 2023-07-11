var restoreString = function(s, indices) {
    let rs = '';
    for(let i=0;i<indices.length;i++) {
        let index = indices.indexOf(i);
        rs+=s.charAt(index);
    }
    return rs;
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
console.log(restoreString("aiohn", [3,1,4,2,0]));
