var combinationSum = function(candidates, target) {
    
    const sortArr = (arr) => {
        return arr.sort((a,b) => a-b);
    };

    let c = sortArr(candidates).filter(x=> x<= target);
    let targets = [];

    
    const findSumNums = (sum, index) => {
        
        let nums = [];
        let currSum = 0;
        for(let x=index;x<c.length;x++) {
            let y = c[x];

            if ( y > sum) {
                break;
            }

            currSum+=y;
            if ( sum % y === 0 ) {
                let a = [];
                for(let z=0;z<sum/y;z++) {
                    a.push(y)
                }
                nums.push(a);
            }


            let u = c.indexOf((sum-y), x+1);

            if ( u !==-1 && c[u]!== y) {
                nums.push([y, c[u]])
            }
            console.log('currSum',currSum, y, x, index);
            if ( y!== currSum &&  currSum < sum ) {
                let d = sum - currSum; 
                let result = findDivident(d, index);
                if ( result.i !== -1 ) {
                    let firstNums = c.slice(index, x+1);
                    let g = c[result.i];
                    for(let u=0;u<result.y;u++) {
                        firstNums.push(g);
                    }
                    firstNums = sortArr(firstNums);
                    if ( firstNums.length > 1 || firstNums[0] !== g ) {
                        nums.push(firstNums);
                    }
                }

                let sumResult = findSumNums(d, index);

                console.log('sumResult',sumResult, d, index);

            }
        }

        return nums;

    }

    for ( let i=0;i<c.length;i++) {
        let x = c[i];

        if ( x === target ) {
            targets.push([x])
        } else {
            let d = parseInt(target / x);
           
            for ( let j=d;j>0;j--) {
                let a = [];
                for ( let q=0;q<j;q++) {
                    a.push(x);
                }
                
                let n = x*j;
               
                if ( n === target) {
                  
                    targets.push(a);
                } else {
                    const dif = target - n;
                    let nums = findSumNums(dif, i);
                   //console.log('nums, diff, i, a', nums, dif, i, a);
                    nums.forEach(numArr => {
                        targets.push([...a, ...numArr])
                    })
                }
              
            }
        }
    }
    for(let t of targetSet ) {
        let v = t.split('_');
        targets.push(v);
    }
    return targets;
};


//console.log(combinationSum([2,7,6,3,5,1], 9));

//console.log(combinationSum([2,3,6,7], 7));

//console.log(combinationSum([2,3,5], 8));

//console.log(combinationSum([7,3,2], 18));
console.log(combinationSum([4,2,7,5,6], 16));
