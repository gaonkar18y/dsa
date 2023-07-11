var compactObject = function(obj) {
    if(Array.isArray(obj)){
        let result = [];
        for(let item of obj){
            if(item){
                if(typeof item === 'object'){
                    const r = compactObject(item);
                    result.push(r);
                }else{
                    result.push(item);
                }
            }
        }
        return result;
    }else{
        let result = {};
        for(let itemKey in obj){
            if(obj[itemKey]){
                if(typeof obj[itemKey] === 'object'){
                    const r = compactObject(obj[itemKey]);
                    result[itemKey] = r;
                }else{
                    result[itemKey] = obj[itemKey];
                }
            }
        }
        return result;
    }
};

console.log(compactObject([false, 1, 2]));
console.log(compactObject([false, 1, 2, null]));
console.log(compactObject({one: "one", two: null, three: false, four: 0, five: { six: "six", seven: null, eight:{nine: null}}}));

console.log(compactObject([false, 1, 2,[3, 0, false, null,[4, 5, undefined]]]));