var maximumWealth = function(accounts) {
    let max=0;
    accounts.map(w=> w.reduce((acc,v)=> acc+v,0)).forEach(tw=> {
        if(tw>max){
            max=tw;
        }
    })
    return max;
}

console.log(maximumWealth([[1,2,3],[3,2,1]]))