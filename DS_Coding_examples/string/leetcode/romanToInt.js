const mappingValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function (s) {
    let total=0;
    let i=0;
    while(i<s.length){
        let curVal = mappingValues[s[i]];
        let nextVal = mappingValues[s[i+1]];
        if(nextVal && nextVal > curVal){
            const diff = nextVal - curVal;
            total+=diff;
            i+=2;
            continue;
        }
        total+=curVal;
        i++;
    }
    return total;
};

console.log(romanToInt("MCMXCIV"));