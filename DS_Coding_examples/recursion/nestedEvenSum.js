function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!

    let result = 0;

    const traverseObj = (ob)=>{

        for(let v of Object.values(ob)){
            if(typeof v === "number"){
                if(v%2 === 0){
                    result+=v;
                }
            }else if(typeof v === 'object'){
                traverseObj(v);
            }
        }
    }

    traverseObj(obj);
    return result;

}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10