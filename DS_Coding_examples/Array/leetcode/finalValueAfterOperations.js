
const operatorsMap = {
    "--X":-1,
    "++X":1,
    "X++":1,
    "X--":-1
}
var finalValueAfterOperations = function(operations) {
    let x=0;

    for(let i=0;i< operations.length;i++){
        x=x+operatorsMap[operations[i]];
    }

    return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))

const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)