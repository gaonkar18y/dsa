/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "";

    const traverse = (count, ans)=>{
        if(n==count){
            result = ans;
            return;
        } else {
            let newAns = "";
            for(let i=0;i<ans.length;i++){
               const c = ans[i];
               let charCount = 1;
               while(c === ans[i+1]){
                    i++;
                    charCount++;
               }
               newAns+=`${charCount}${c}`;
            }
            traverse(count+1, newAns);
        }
    }
    traverse(1,"1");
    return result;
};

console.log(countAndSay(4));