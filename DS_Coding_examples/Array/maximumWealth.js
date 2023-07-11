var maximumWealth = function(accounts) {
    
    let max = 0;

    for(let i=0;i<accounts.length;i++){
        let tempSum = 0;
        for(let j=0;j<accounts[i].length;j++){
            tempSum+=accounts[i][j];
        }
        if(tempSum>max) {
            max = tempSum;
        }
    }

    return max;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));