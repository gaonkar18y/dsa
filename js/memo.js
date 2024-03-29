function memoize(fn) {
    const cache = {};
    let cachePrefix = parseInt(Math.random()*10000);
    return function(...args) {
        const key = cachePrefix+args.toString();
        if(cache[key]!== undefined){
            return cache[key];
        }
        const result = fn(...args);
        cache[key]=result;
        return result
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
return a + b;
})
memoizedFn(0, 0) // 5
memoizedFn(0, 0) // 5
console.log(callCount) // 1 
