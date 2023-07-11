var isHappy = function(n) {
    if(n===1){
        return true;
    }

    if(n===0){
        return false;
    }

    let t = n;
    let map={};
    while(true){
        if(map[t]){
            t=map[t];
        }else{
            let tstr = t+"";
            let sum=0;
            for(let i=0;i<tstr.length;i++){
                const tn = parseInt(tstr[i]);
                sum+=(tn*tn);
            }
            map[t]=sum;
            if(sum === t || map[sum]){
                return false;
            }
            t=sum;
        }

        if(t===1){
            return true;
        }
    }
};

//console.log(isHappy(19));
console.log(isHappy(2))