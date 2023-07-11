var promiseAll = async function(functions) {
    return new Promise(async (res, rej)=>{
        const result = [];
        let count = 0;
        for(let i=0;i<functions.length;i++){
            const resFn = r=> {
                result[i]=r;
                count++;
                if(count === functions.length){
                    res(result);
                }
            }
            functions[i]().then(resFn).catch(err=>{
                    rej(err);
            });
        }  
    });
};


const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]);

promise.then(console.log);
 
