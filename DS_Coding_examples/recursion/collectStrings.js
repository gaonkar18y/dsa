function collectStrings(input) {
    
    const result = [];

    const traverse = (obj)=>{

        for(let v of Object.values(obj)){
            if(typeof v === 'string'){
                result.push(v);
            }else if( typeof v === 'object'){
                traverse(v);
            }
        }
    }

    traverse(input);

    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])