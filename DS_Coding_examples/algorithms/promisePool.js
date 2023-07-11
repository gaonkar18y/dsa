var promisePool = async function(functions, n) {
    while(functions.length){
        const fnsToExecute = [];
        for(let i=0;i<n;i++) {
           const fn = functions.shift();
           if(fn){
               fnsToExecute.push(fn);
           }
        }
        console.log(fnsToExecute);
        await Promise.all(fnsToExecute);
       
        }
   /* async function evaluateNext() {
       if (functions.length === 0) return;
       const fn = functions.shift();
       await fn();
       await evaluateNext();
   }
   const nPromises = Array(n).fill().map(evaluateNext);
   console.log('nPromises',nPromises);
   await Promise.all(nPromises);*/
};


const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log) // After 900ms
