function stringifyNumbers(input) {
    
    const result = JSON.parse(JSON.stringify(input));

    const traverse = (obj)=>{
        for(let k in obj){
            if(typeof obj[k] === 'number'){
                obj[k] = obj[k].toString();
            }else if( typeof obj[k] === 'object' ){
                traverse(obj[k]);
            }
        }

        return obj;
    }
    
    return traverse(result);
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/