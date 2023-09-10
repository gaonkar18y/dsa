var canCompleteCircuit = function(gas, cost) {
    const l = gas.length;
    if(l === 1){
        if(gas[0]>= cost[0]) return 0;
        return -1;
    }
    let startIndexs = [];
    let tank = 0;
    for(let i=0;i<l;i++){
        const t = gas[i] - cost[i];
        if(t>0){
            if(t > tank){
                tank = t;
                startIndexs.unshift(i);
            }else{
                startIndexs.push(i);
            }
        }
    }

    for(let i=0;i<startIndexs.length;i++){
        let startIndex = startIndexs[i];
        let tank = 0;
        let j =0;
        for(;j<l;j++){
            tank = tank+ gas[startIndex] - cost[startIndex];
            if(tank < 0){
                break;
            }
            if((startIndex+1)>=l){
                startIndex = 0;
            }else{
                startIndex++;
            }
        }

        if(j === l){
            return startIndex;
        }

    }

    return -1;

};

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4],[3,4,3]));

